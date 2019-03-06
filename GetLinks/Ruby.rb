require 'net/http'
result = Net::HTTP.get(URI.parse('http://www.stroustrup.com/C++.html'))
result.scan(/"((http)s?://.*?)"/)
