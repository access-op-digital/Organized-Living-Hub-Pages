"""Local static preview with Vercel-style clean HTML URLs. No dependencies."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parent

class PreviewHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        self._clean_url()
        super().do_GET()

    def do_HEAD(self):
        self._clean_url()
        super().do_HEAD()

    def _clean_url(self):
        path = unquote(urlsplit(self.path).path)
        candidate = (ROOT / path.lstrip('/')).resolve()
        if not candidate.is_relative_to(ROOT):
            return
        if path != '/' and not candidate.suffix and candidate.with_suffix('.html').is_file():
            self.path = path + '.html'

    def end_headers(self):
        self.send_header('X-Robots-Tag', 'noindex, nofollow')
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8000)
    args = parser.parse_args()
    handler = partial(PreviewHandler, directory=str(ROOT))
    with ThreadingHTTPServer(('127.0.0.1', args.port), handler) as server:
        print(f'Preview: http://127.0.0.1:{args.port}/bedroom-closet', flush=True)
        server.serve_forever()
