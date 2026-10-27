ARG HUGO_VERSION=0.167.0

# Hugo extended needs glibc, so build on Debian rather than Alpine
FROM debian:bookworm-slim AS hugo
ARG HUGO_VERSION
ARG TARGETARCH
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates curl \
 && rm -rf /var/lib/apt/lists/*
RUN set -eu; \
    base="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}"; \
    tarball="hugo_extended_${HUGO_VERSION}_linux-${TARGETARCH:-amd64}.tar.gz"; \
    curl -sSLO "$base/$tarball"; \
    curl -sSLO "$base/hugo_${HUGO_VERSION}_checksums.txt"; \
    grep " $tarball\$" "hugo_${HUGO_VERSION}_checksums.txt" | sha256sum -c; \
    tar -xzf "$tarball" -C /usr/local/bin hugo; \
    rm "$tarball" "hugo_${HUGO_VERSION}_checksums.txt"; \
    hugo version
WORKDIR /app

# Build the site (static). Coolify passes its variables as build arguments;
# COOLIFY_PREVIEW, COOLIFY_BRANCH and COOLIFY_REPO turn on the preview banner.
FROM hugo AS build
ARG COOLIFY_PREVIEW COOLIFY_BRANCH COOLIFY_REPO SOURCE_COMMIT
# faster preview builds (see hugo.toml): LIMIT_POSTS=10, SKIP_OG=true, SKIP_IMAGE_OPTIMIZATION=true
ARG LIMIT_POSTS SKIP_OG SKIP_IMAGE_OPTIMIZATION
COPY . .
RUN hugo --gc

# Development server
FROM hugo AS dev
COPY . .
EXPOSE 1313
CMD ["hugo", "server", "--bind", "0.0.0.0"]

# Export static build to host
FROM scratch AS static
COPY --from=build /app/dist /

# Caddy with the replace-response plugin, which the theme button needs (see
# Caddyfile). Pinned: the images by digest, the plugin by commit.
FROM caddy:2.11.7-builder-alpine@sha256:ef9b65adf9a224770c6d5f6d1ae1bf99bc3caaa78d8c4bae3ea949ee6984f301 AS caddy
RUN xcaddy build v2.11.7 --with github.com/caddyserver/replace-response@80962887e4c680abfd1b11ce1403fa8cc0fdd3d6

# Serve static build with Caddy
FROM caddy:2.11.7-alpine@sha256:eb4d35b7452d1ab6171fbdbe8d9275b2301dad6dad92115d91e19fb9b24d510f AS serve-static
COPY --from=caddy /usr/bin/caddy /usr/bin/caddy
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80
