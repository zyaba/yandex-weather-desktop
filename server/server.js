var express = require('express'),
    app = express();

GLOBAL.React = require('react');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/dist', express.static(__dirname + '/../dist'));
app.use('/static', express.static(__dirname + '/../static'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));

app.get('/', require('./routes').index);
app.get('/:geoid', require('./routes').geoid );

app.listen(8080);
