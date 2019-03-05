var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');


module.exports = function () {
  var genre = "";
  var books = [];

  var jsonify = through(function(line) {
    if(line.length > 0)
      this.queue(JSON.parse(line));
  });

  var group = through(
    function (row) {
      if(row.type === "genre") {
        if(genre.length > 0)
          this.queue({'name': genre, 'books': books});
        genre = row.name;
        books = [];
      }
      else if(row.type === "book"){
        books.push(row.name);
      }
    },
    function () {
      if(genre.length > 0)
        this.queue({'name': genre, 'books': books});
      this.queue(null);
    });

  var stringify = through(function toJson (data) {
    this.queue(JSON.stringify(data) + '\n');
  });

  return combine(split(), jsonify, group, stringify, zlib.createGzip());
}
