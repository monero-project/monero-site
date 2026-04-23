FROM node:22-alpine AS base

ENV ASTRO_TELEMETRY_DISABLED=1
RUN corepack enable
WORKDIR /app

# Install production dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

# Install all dependencies
FROM base AS deps-dev
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Prepare source
FROM base AS src
ARG PREPARE_BUILD_ARGS
COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .
RUN if [ -n "$PREPARE_BUILD_ARGS" ]; then \
      pnpm prepare-build $PREPARE_BUILD_ARGS; \
    fi
COPY --from=deps /app/node_modules ./node_modules

# Build the site (static)
FROM src AS build
ARG SKIP_IMAGE_OPTIMIZATION
RUN SKIP_IMAGE_OPTIMIZATION=$SKIP_IMAGE_OPTIMIZATION pnpm build

# Build the site (SSR)
FROM src AS build-ssr
ARG SKIP_IMAGE_OPTIMIZATION
ENV SSR=true
RUN SKIP_IMAGE_OPTIMIZATION=$SKIP_IMAGE_OPTIMIZATION pnpm build

# Development server
FROM base AS dev
COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .
EXPOSE 4321
CMD ["pnpm", "dev", "--host"]

# Export static build to host
FROM scratch AS static
COPY --from=build /app/dist /

# Serve static build with Caddy
FROM caddy:alpine AS serve-static
COPY --from=build /app/dist /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 80

# SSR runtime files
FROM node:22-alpine AS ssr-runtime
WORKDIR /app
COPY --from=build-ssr /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules
COPY --from=src /app/src/i18n/translations ./src/i18n/translations
COPY --from=src /app/src/content/moneropedia ./src/content/moneropedia
COPY --from=src /app/public/media/press-kit ./public/media/press-kit
COPY --from=src /app/public/media/vtt ./public/media/vtt
COPY --from=src /app/downloads ./downloads

# Export SSR build to host
FROM scratch AS ssr
COPY --from=ssr-runtime /app /

# SSR with Node.js
FROM ssr-runtime AS serve-ssr
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["node", "dist/server/entry.mjs"]
