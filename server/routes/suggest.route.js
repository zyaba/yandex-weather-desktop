var suggest = require('../helpers/suggest.helper.js');

module.exports = function(req, res){
    var q = req.query;
    suggest(q).then(function(data) { 
        res.json(data) 
    });
};
