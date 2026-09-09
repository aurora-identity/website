# Aurora Identity — Website

Source for [auroraidentity.com](https://auroraidentity.com/), the public marketing and
documentation site for Aurora Identity. Built with [Eleventy](https://www.11ty.dev/).

Aurora Identity governs the identities your SSO does not: AI tools, service accounts and
shadow apps. It correlates browser telemetry, network logs and email signals to show who is
using which AI tools, with all processing staying inside your own cloud.

This repository holds the website only. The product lives in two other repositories:

- [browser-extension-public](https://github.com/aurora-identity/browser-extension-public) — the browser sensor that collects usage telemetry.
- [server-public](https://github.com/aurora-identity/server-public) — the ingest, correlation and reporting backend.

## Local setup

Requires Node 22 or newer.

```bash
npm ci
npm run dev      # http://localhost:8080
```

./run.sh does the same and opens the browser for you.

## Build

```bash
npm run build    # writes the static site to _site/
```

`_site` is generated output and is not committed. Eleventy does not remove pages whose
source has gone, so delete the whole directory and rebuild if it ever holds stale files.

## Layout

- src/ — pages, docs, includes and assets.
- src/_data/ — site-wide values such as the URL, tagline and contact details.
- eleventy.config.cjs — Eleventy configuration, passthrough copies and CSS minification.


## License

MIT. See [LICENSE](LICENSE).