wget -q -O - http://www.stroustrup.com/C++.html | sed -n '/http:/s/.*href="\([^"]*\)".*/\1/p' | sort