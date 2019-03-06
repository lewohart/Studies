foreach (@DOMDocument::loadHTMLFile('http://stroustrup.com/C++.html')->getElementsByTagName('a') as $a) {
	<!-- preg_match('~^https?://~', $url = $a->getAttribute('href')) && printf("%s\n", $url); -->
	
    if (in_array(parse_url($url = $a->getAttribute('href'), PHP_URL_SCHEME), ['http', 'https'], true)) {
        echo $url, PHP_EOL;
    }
}

