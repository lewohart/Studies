import Network.HTTP
import Text.Regex.Posix
pattern = "((http://)?www([./#\\+-][a-zA-Z]*)+)"
site = "http://www.stroustrup.com/C++.html"

main = do
    file <- getResponseBody =<< simpleHTTP (getRequest site)
    let result = getAllTextMatches $ file =~ pattern
    putStr $ unlines result -- looks nicer