"""
Pythonista3 app CodeMirror
"""

import pythonista.wkwebview as wkwebview
import ui
import pathlib

uri = pathlib.Path('./main_index.html')


class View(ui.View):
  def __init__(self):
    self.wv = wkwebview.WKWebView(flex='WH')
    self.wv.load_url(str(uri))
    self.add_subview(self.wv)

  def will_close(self):
    self.wv.clear_cache()


_view = View()
_view.present(style='fullscreen', orientations=['portrait'])

