var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var dogCtrl = require('./controllers/dogCtrl');
// var toyCtrl = require('./controllers/toyCtrl');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

//end points
app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

// app.post('/toys', toyCtrl.create);
// app.get('/toys', toyCtrl.read);
// app.put('/toys/:id', toyCtrl.update);
// app.delete('/toys/:id', toyCtrl.delete);


app.listen(8000, function(){
  console.log("listening to 8000");
});
