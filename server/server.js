var express = require('express'),
    app = express();

GLOBAL.React = require('react');

app.use("/", express.static(__dirname + "/../"));
app.use("/dist", express.static(__dirname + "/../dist"));
app.use("/bower_components", express.static(__dirname + "/../bower_components"));

app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());

var routes = require('./routes/main.router');

app.get('/', routes.index);
app.get('/locality', routes.locality);
app.get('/:geoid', routes.forecast );

app.listen(8080);
