open System.Net

let (|MatchValue|) (reMatch: Match) : string = reMatch.Value

let getHtml (uri : string) : string = 
    use webClient = WebClient() in
        let html : string = webClient.DownloadString(uri)
        html

let getLinks (uri : string) : string list =
    let html : string = getHtml uri
    let matches : MatchCollection = Regex.Matches(html, @"https?://[^""]+") 
    let links = [ for MatchValue reMatch in matches do yield reMatch ]
    links

let links = getLinks "http://www.stroustrup.com/C++.html" 
for link in links do
    Console.WriteLine(link)