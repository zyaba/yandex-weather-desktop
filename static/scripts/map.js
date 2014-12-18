(function ( scope ) {
    scope.YandexMapForecast = new function () {
        this.$map = null;

        this.temp = null;
        this.coords = null;
        this.mapInstance = null;

        this.myGeoObjects = [];

        this.init = function () {
            this._getMapElement();
            this._getMapData();

            this.circleLayout = ymaps.templateLayoutFactory.createClass( '<div class="temp-baloon">' +
            '<span class="temp-icon" style="background-image: url(http://ekb.shri14.ru/icons/' + this.$map.data( "now-icon" ) + '.svg);"></span>' +
            '<span class="temp-value">' + this.temp + '</span>' +
            '</div>' );

            this.render();
        };

        this.render = function () {
            this.mapInstance = new ymaps.Map( 'map-yandex', {
                center: this.coords,
                zoom: 12
            } );

            this._renderObjects();

            return this;
        };

        this._getMapElement = function () {
            this.$map = $( '#map' );
        };

        this._getMapData = function () {
            this.temp = this.$map.data( "now-temp" ) > 0 ? '+' + this.$map.data( "now-temp" ) : this.$map.data( "now-temp" );
            this.coords = [ this.$map.data( 'lat' ), this.$map.data( 'lon' ) ];
        };

        this._renderObjects = function () {
            this.myGeoObjects[ 0 ] = new ymaps.Placemark(
                this.coords, {
                    hintContent: 'Метка с круглым HTML макетом'
                }, {
                    iconLayout: this.circleLayout
                }
            );

            // Создадим кластеризатор и запретим приближать карту при клике на кластеры.
            var clusterer = new ymaps.Clusterer();
            clusterer.add( this.myGeoObjects );
            this.mapInstance.geoObjects.add( clusterer );
        };
    };
})( window );

$( function () {
    ymaps.ready( YandexMapForecast.init.bind( YandexMapForecast ) );
} );
