exports.index = function(req, res){
    res.render( __dirname + '/../../static/pages/views/index', {
        title: 'Yandex Weather'
    });
};
