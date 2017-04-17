
var http = require('http'),
    express = require('express'),
    twilio = require('twilio');

var app = express();

app.post('/sms', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    twiml.message(function() {
      this.body('This is a parsnip.');
      this.media('http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/parsnip.jpg');
    });
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(3000, function () {
    console.log("Express server listening on port 3000");
});
