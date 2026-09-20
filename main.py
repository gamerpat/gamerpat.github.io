from __future__ import annotations

import os
import json
from urllib.request import Request, urlopen
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
HOST = "0.0.0.0"
PORT = int(os.environ.get("PORT", "8000"))


class SiteHandler(SimpleHTTPRequestHandler):
    """Serve the site with headers suitable for a static deployment."""

    server_version = "TMNW/1.0"

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("X-Frame-Options", "DENY")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header(
            "Permissions-Policy",
            "camera=(), microphone=(), geolocation=(), payment=()",
        )
        super().end_headers()

    def do_POST(self) -> None:
        if self.path != "/api/apply":
            self.send_error(404)
            return
        webhook = os.environ.get("DISCORD_WEBHOOK_URL")
        if not webhook:
            self.send_error(503, "Application endpoint is not configured")
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            data = json.loads(self.rfile.read(length))
            content = "New TMNW application\\n" + "\\n".join(f"{key}: {value}" for key, value in data.items())
            request = Request(webhook, data=json.dumps({"content": content}).encode(), headers={"Content-Type": "application/json"}, method="POST")
            with urlopen(request, timeout=10):
                pass
            self.send_response(204)
            self.end_headers()
        except (ValueError, OSError, json.JSONDecodeError):
            self.send_error(502, "Could not deliver application")

    def log_message(self, format_string: str, *args: object) -> None:
        print(f"{self.address_string()} - {format_string % args}")


def main() -> None:
    handler = partial(SiteHandler, directory=str(ROOT))
    server = ThreadingHTTPServer((HOST, PORT), handler)
    print(f"TMNW site listening on http://{HOST}:{PORT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping TMNW site.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
