"""開発用ローカルサーバー。編集が即反映されるよう Cache-Control: no-store を付けて配信する。"""
import http.server
import os
from functools import partial


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8901))
    directory = os.path.dirname(os.path.abspath(__file__))
    handler = partial(NoCacheHandler, directory=directory)
    with http.server.ThreadingHTTPServer(("", port), handler) as httpd:
        print(f"Serving {directory} on http://localhost:{port}")
        httpd.serve_forever()
