package require http
set html [http::data [http::geturl http://www.stroustrup.com/C++.html]]
puts [join [regexp -inline -all {(?:http://)?www(?:[./#\+-]\w*)+} $html] \n]
