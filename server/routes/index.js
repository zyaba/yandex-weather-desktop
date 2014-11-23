exports.index = function(req, res){
    res.render('../views/index', {
        //assets: {
        //    css: [
        //        '../../dist/weather.min.css'
        //    ]
        //    
        //},
        
        title: 'Yandex Weather'
    });
};
