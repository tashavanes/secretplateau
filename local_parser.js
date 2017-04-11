var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.post('/custom', function(req, res) {
    var twilio = require('twilio');
    var twiml = new twilio.TwimlResponse();
    if (req.body.Body == 'Parsnip') {
	twiml.message(function() {
      		this.body('This is a parsnip.');
      		this.media('http://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/parsnip.jpg');
}); 
   } else if (req.body.Body == 'Celery') {
       twiml.message(function() {
      		this.body('This is celery.');
      		this.media('http://images.all-free-download.com/images/graphicthumb/celery_vegetables_healthy_237887.jpg');
       });
          } else if (req.body.Body == 'Puffer') {
       twiml.message(function() {
      		this.body('Puffer');
      		this.media('puffer.jpg');
}); 
} else {
        twiml.message('No match, Twilio sends this in the request to your server.');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(3000, function () {
    console.log("Express server listening on port 3000");
});
