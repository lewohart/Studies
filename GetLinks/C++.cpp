#include <boost/asio.hpp>
#include <regex>
#include <iostream>
int main() {
    std::string server = "www.stroustrup.com";
    std::string request = "GET http://" + server + "/C++.html HTTP/1.0\r\nHost: " + server + "\r\n\r\n";
    boost::asio::ip::tcp::iostream s{server, "http"};
    s << request;
    std::regex pat{R"((http://)?www([./#\+-]\w*)+)"};
    std::smatch m;
    for (std::string l; getline(s, l);)
        if (std::regex_search(l, m, pat))
            std::cout << m[0] << "\n";
}
