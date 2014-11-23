var express = require("express"),
    app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use("/dist", express.static(__dirname + "/../dist"));
app.use("/bower_components", express.static(__dirname + "/../bower_components"));

app.get('/', require('./routes').index);

app.listen(8080);
