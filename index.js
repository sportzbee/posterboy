var express = require('express');
var app = express();

app.use( '/static', express.static( __dirname ) );

app.listen( 80, function () {
  console.log('Posterboy listening on port 80!');
  console.log('Base directory: ' + __dirname );
  console.log('Launch: http://fbpost1.azurewebsites.net/static/src/index.html');
});
