html<-paste(readLines("http://www.stroustrup.com/C++.html"),collapse="\n")
regmatches(html,gregexpr("http[^([:blank:]|\\\"|<|&|#\n\r)]+",html))
