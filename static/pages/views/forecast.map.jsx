/** @jsx React.DOM */
var ForecastMap;

ForecastMap = React.createClass({
    render: function() {
        return (            
            <div role="tabpanel" className="tabs-panel fade" id="map" data-lat={this.props.info.lat} data-lon={this.props.info.lon} data-now-icon={this.props.now.weather_icon} data-now-temp={this.props.now.temp}>
                <div id="map-yandex" style={{ width: '600px', height: '300px'}}></div>
            </div>
        )
    }
});

module.exports = ForecastMap;
