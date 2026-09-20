# TMNW security and DDoS protection

This project is a static site. Browser JavaScript cannot stop DDoS traffic because an attack reaches the hosting network before the page loads.

## Run the site

```bash
python main.py
```

The host listens on `0.0.0.0` and uses the hosting provider's `PORT` environment variable when present. Locally it defaults to port `8000`.

## Required edge protection

1. Put the domain behind Cloudflare, Fastly, or the DDoS service provided by the host.
2. Enable DDoS protection and managed WAF rules.
3. Enable bot protection and rate limiting for the Discord/join path.
4. Cache the static files at the edge and enable "Under Attack" mode only during an incident.
5. Keep the Discord invite in the page, but do not expose private API keys or server credentials.
6. Keep HTTPS enabled and deploy the included `_headers` file when the host supports it.

## Important limitation

The captcha, Content Security Policy, and Witchguard status in this page help with browser-side abuse and unsafe markup. They do not replace CDN-level DDoS mitigation or server-side rate limiting.
