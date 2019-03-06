package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
    "os"
    "regexp"
)

func main() {
    resp, err := http.Get("http://www.stroustrup.com/C++.html")
    if err != nil {
        fmt.Fprintln(os.Stderr, err)
        os.Exit(1)
    }
    defer resp.Body.Close()
    data, _ := ioutil.ReadAll(resp.Body)
    results := regexp.MustCompile(`https?://[^""]+`).FindAll(data, -1)
    for _, row := range results {
        fmt.Println(string(row))
    }
}