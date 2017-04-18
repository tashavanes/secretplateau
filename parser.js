var http = require('http'),
    express = require('express'),
    twilio = require('twilio'),
    bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

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
      		this.body('This is a pufferfish.');
      	   this.media('https://secret-plateau-55438.herokuapp.com/puffer.jpg');
       });
  } else if (req.body.Body == 'Diabetes') {
       twiml.message(function() {
      		this.body('You have requested diabetes information.');
      		this.media('https://secret-plateau-55438.herokuapp.com/diabetes.jpg');
       });

       } else if (req.body.Body == 'COPD') {
       twiml.message(function() {
      		this.body('You have requested COPD information.');
      		this.media('https://secret-plateau-55438.herokuapp.com/copd.jpg');
       });

       } else if (req.body.Body == 'Heart') {
       twiml.message(function() {
      		this.body('You have requested heart disease information.');
      		this.media('https://secret-plateau-55438.herokuapp.com/heart.jpg');
       });

       } else if (req.body.Body == 'file') {
       twiml.message(function() {
      		this.body('You have requested a file.');
      		this.media('https://secret-plateau-55438.herokuapp.com/file.pdf');
       });
	   
      
  }  else {
        twiml.message('No match to your entered text, please type "Diabetes","COPD", or "Heart" for an image. Case sensitive.');
    }
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:'+ port);
});
