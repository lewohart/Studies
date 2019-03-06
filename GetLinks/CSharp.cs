using System;
using System.Net;
using System.Text.RegularExpressions;

class Program {
    static void Main() {
        string html = new WebClient().DownloadString("http://www.stroustrup.com/C++.html");
        foreach (Match match in Regex.Matches(html, @"https?://[^""]+"))
            Console.WriteLine(match);
    }
}