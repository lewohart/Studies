(with-current-buffer (url-retrieve-synchronously "http://www.stroustrup.com/C++.html")
  (while (re-search-forward "https?://[^\\\"]*")
    (print (match-string 0))))