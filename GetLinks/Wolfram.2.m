Cases[
 Import["http://www.stroustrup.com/C++.html", "XMLObject"],
 XMLElement["a", {___, "href" -> link_, ___}, ___] :> 
  link /; StringMatchQ[link, RegularExpression["((http://)?www([./#\\+-]\\w*)+)"]]
, Infinity]