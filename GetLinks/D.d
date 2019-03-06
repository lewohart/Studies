import std.net.curl, std.stdio;
import std.algorithm, std.regex;

void main() {
foreach(_;byLine("http://www.stroustrup.com/C++.html")
    .map!((a)=>a.matchAll(regex(`<a.*?href="(.*)"`)))
    .filter!("a")){ writeln(_.front[1]); }
}