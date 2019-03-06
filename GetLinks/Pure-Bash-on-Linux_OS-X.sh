domain="www.stroustrup.com"
path="C++.html"
exec 3<> /dev/tcp/$domain/80
printf "GET /$path HTTP/1.1\r\nhost: %s\r\nConnection: close\r\n\r\n" "$domain" >&3
while read -u3; do
    if [[ "$REPLY" =~ http://[^\"]* ]]; then
        printf '%s\n' "$BASH_REMATCH"
    fi
done
