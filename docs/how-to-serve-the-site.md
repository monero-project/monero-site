# How to Serve the Site

`hugo` builds the whole site into `dist/`: plain files that any web server can serve. Two things need the web server's help:

- **The 404 page**: serve `/404.html` with status 404 for addresses that don't exist.
- **The theme button** in the header (System → Light → Dark → System).

The Docker target `serve-static` does both with Caddy, using the [`Caddyfile`](../Caddyfile). The theme rules need Caddy's [replace-response](https://github.com/caddyserver/replace-response) plugin, which the Dockerfile builds in (`xcaddy build --with github.com/caddyserver/replace-response`). On another Caddy server, copy the `Caddyfile`'s rules and change `root`; on nginx, see [below](#nginx).

## How the theme button works

There is no JavaScript and no cookie: the theme is kept in the address.

- `/dark/...` and `/light/...` serve the same files as `/...`. The web server marks those pages `<html data-theme="dark">` (or `"light"`), and rewrites the site's links (`href="/...`) to stay under the prefix.
- The stylesheet does the rest: `:root[data-theme="dark"]` sets `color-scheme: dark`, so every `light-dark()` colour follows; rules that used `@media (prefers-color-scheme: dark)` also apply under `[data-theme="dark"]` and not under `[data-theme="light"]` (see `assets/css/components/themeable-image.css`).
- The button's links are `?theme=light`, `?theme=dark` and `?theme=system`. The web server answers them with a redirect to `/light/<page>`, `/dark/<page>` or `/<page>`.

So when you write styles, use `light-dark()` for colours that differ between the themes. If you need a rule for dark mode only, write it like this, so that it works with the button too:

```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .thing[data-c-my-component] {
    /* dark mode */
  }
}

:root[data-theme="dark"] .thing[data-c-my-component] {
  /* dark mode */
}
```

Search engines aren't shown the themed copies: the canonical, `hreflang` and sitemap addresses never have the prefix, and `robots.txt` disallows `/dark/` and `/light/`.

On a server without this configuration the site works as before, following the system's setting; the button's links just reload the page.

## nginx

The same rules for nginx. They need the `sub_filter` module, which the official nginx images and most Linux distributions' nginx include. Change `/srv/monero-site` to where `dist/` is.

```nginx
# in the http {} block: the page's path without the /dark or /light prefix and the
# query (never an address starting // or /\, which a browser reads as another site)
map $request_uri $site_page {
    ~^/(?:dark|light)(/(?:[^/?\x5c][^?]*)?)(?:\?|$) $1;
    ~^(/(?:[^/?\x5c][^?]*)?)(?:\?|$)               $1;
    default                                      /;
}

server {
    # ... listen, server_name, TLS ...
    root /srv/monero-site;
    absolute_redirect off;
    error_page 404 /404.html;

    if ($arg_theme = light)  { return 302 /light$site_page; }
    if ($arg_theme = dark)   { return 302 /dark$site_page; }
    if ($arg_theme = system) { return 302 $site_page; }

    location ^~ /dark/ {
        alias /srv/monero-site/;
        try_files $uri $uri/ =404;
        error_page 404 /dark/404.html;
        sub_filter_once off;
        sub_filter '<html ' '<html data-theme="dark" ';
        sub_filter 'href="/' 'href="/dark/';
        sub_filter 'url=/' 'url=/dark/';
    }
    # the same for /light/ with "light"

    location / {
        try_files $uri $uri/ =404;
    }
}
```
