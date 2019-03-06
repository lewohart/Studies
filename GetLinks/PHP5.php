<?php
preg_match_all('/"(https?:\/\/.*?)"/',file_get_contents('http://www.stroustrup.com/C++.html'),$m);
print_r($m[1]);
