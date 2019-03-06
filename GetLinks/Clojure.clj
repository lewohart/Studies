(->> (slurp "http://www.stroustrup.com")
     (re-seq #"(?:http://)?www(?:[./#\+-]\w*)+"))