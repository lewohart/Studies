"""\"(https?://.*?)\"""".r.findAllIn(scala.io.Source.fromURL("http://www.stroustrup.com/C++.html").mkString).foreach(println)