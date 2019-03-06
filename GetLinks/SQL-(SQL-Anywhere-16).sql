-- Define a stored procedure to fetch the web page

CREATE OR REPLACE PROCEDURE CPPWebPage()
URL 'http://www.stroustrup.com/C++.html'
TYPE 'HTTP';

-- Produce the result set using a single query

SELECT REGEXP_SUBSTR(Value,'"https?://[^""]+"',1,row_num) AS Link  
FROM (SELECT Value FROM CPPWebPage() WITH (Attribute LONG VARCHAR, Value LONG VARCHAR) 
      WHERE Attribute = 'Body') WebPage, 
      sa_rowgenerator( 1, 256 ) 
WHERE Link IS NOT NULL;