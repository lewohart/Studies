import java.util.regex.*;
class M{
    public static void main(String[]v)throws Throwable{
        Matcher m = Pattern.compile( "\"((http)s?://.*?)\"" )
            .matcher(
                 new Scanner(
                         new URL( "http://www.stroustrup.com/C++.html" )
                             .openStream(),
                         "UTF-8")
                     .useDelimiter("\\A")
                     .next());
        while(m.find())
            System.out.println(m.group());
    }
}