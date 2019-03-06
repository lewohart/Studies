import urllib2 as u, re
s = "http://www.stroustrup.com/C++.html"
w = u.urlopen(s)
h = w.read()
l = re.findall('"((http)s?://.*?)"', h)
print l
