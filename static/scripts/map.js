function initYandexMap() {
    var $map = $('#map'),
        lat = $map.data('lat'),
        lon = $map.data('lon'),
        temp = $map.data("now-temp") > 0 ? '+' + $map.data("now-temp") : $map.data("now-temp");
    
    var myMap = new ymaps.Map('map-yandex', {
        // центр и коэффициент масштабирования однозначно
        // определяют область картографирования
        center: [ lat, lon ],
        zoom: 12
    });

    // Создадим массив геообъектов.
    var  myGeoObjects = [];

    var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="temp-baloon">' +
    '<span class="temp-icon" style="background-image: url(http://ekb.shri14.ru/icons/' + $map.data("now-icon") + '.svg);"></span>' +
    '<span class="temp-value">' + temp + '</span>' +
    '</div>');

    myGeoObjects[0] = new ymaps.Placemark(
        [ lat, lon], {
            hintContent: 'Метка с круглым HTML макетом'
        }, {
            iconLayout: circleLayout//,
            // Описываем фигуру активной области "Круг".
            //iconShape: {
            //    type: 'Circle',
            //    // Круг описывается в виде центра и радиуса
            //    coordinates: [0, 0],
            //    radius: 25
            //}
        }
    );
    //myGeoObjects[1] = new ymaps.GeoObject({
    //    geometry: { type: "Point", coordinates: [56.021, 36.983] },
    //    properties: {
    //        clusterCaption: 'Геообъект №2',
    //        balloonContentBody: 'Содержимое балуна геообъекта №2.'
    //    }
    //});

// Создадим кластеризатор и запретим приближать карту при клике на кластеры.
    var clusterer = new ymaps.Clusterer();
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer);
}
