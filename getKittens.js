var http = require('http');
var fs = require('fs');

function getTheKittens(cb, cbn) {
options = {
    host: 'www.emergencykitten.com',
    path: '/kittens.js'
};

http.get(options, function(res) {
    var body = '';
      res.on('data', function(chunk) {
            body += chunk;
              });
        res.on('end', function() {
              cb(body, cbn)
                });
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});
}


function parseTheKittens(body, cb) {
  var json = body.substring(16, body.length - 4);
  var img = new Array();
  var split = json.split(/\r\n|\r|\n/g);

  for (i = 3; i < split.length; i += 6) {
    img.push(split[i].substring(17, split[i].length - 2));
  }
  cb(img);
}

function writeTheKittens(img) {
  var text = "kittens = [\n";

  for(i = 0; i < img.length; i++) {
    text += "  \"" + img[i] +"\"";
    if(i < img.length - 1) {
      text += ",";
    }
    text += "\n";
  }
  text += "]\n\nexports/kittens = kittens;\n";
  console.log(text);
  fs.writeFile('./src/kittens.coffee', text);

}

var test = getTheKittens(parseTheKittens, writeTheKittens);
