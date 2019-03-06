NSString *s;
for (id m in [[NSRegularExpression regularExpressionWithPattern:@"\"((http)s?://.*?)\"" options:0 error:nil] matchesInString:(s=[NSString stringWithContentsOfURL:[NSURL URLWithString:@"http://www.stroustrup.com/C++.html"]])]){
    NSLog(@"%@",[s substringWithRange:[m range]]);
}
