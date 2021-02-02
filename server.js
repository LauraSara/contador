const express = require("express");
const session = require('express-session');
app = express();
port = 8000;

app.use(session({secret: 'codingdojorocks'}));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//app.use(express.static(__dirname + "/static"));
app.use('/static', express.static("static"));

//app.get('/', function(req,res){
//  return res.render('contador');
// });
//  app.get('/',function(req,res){
//    req.session.count =1000
//    console.log('count: ' +req.session.count);
//    return res.render('contador');
//  });


//
app.get('/', function(req, res) {
  if (req.session.count == undefined){
      req.session.count =0 ;
  };
  req.session.count = req.session.count + 1;
  res.render('contador', {count: req.session.count});
});


app.get('/sumar', function(req, res) {
  req.session.count = req.session.count + 1;
  res.redirect('/');
});

app.get('/reiniciar', function(req, res) {
  //res.redirect('/', {count: req.session.count= undefined});
  req.session.count = 0;
  res.redirect('/');
});


app.listen(8000, function() {
  console.log("listening on port 8000");
});