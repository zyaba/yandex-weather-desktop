var express = require('express'),
    app = express();

GLOBAL.React = require('react');

app.use("/", express.static(__dirname + "/../"));
app.use("/dist", express.static(__dirname + "/../dist"));
app.use("/bower_components", express.static(__dirname + "/../bower_components"));

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.get('/', require('./routes').index);
app.get('/:geoid', require('./routes').geoid );

app.listen(8080);
