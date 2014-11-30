/** @jsx React.DOM */
var ForecastHourlyItem = require('./forecast.hourly.item'),
    ForecastHourly;

var ForecastHourly = React.createClass({
    render: function() {
        var min = this.props.min,
            max = this.props.max;
        
        return (            
            <div role="tabpanel" className="tabs-panel fade" id="hourly">                
            <div className="forecast-hourly">                
                {this.props.hours.map(function(object, i){
                    return <ForecastHourlyItem hour={object} min={min} max={max}/>;
                })}
            </div>
            </div>
        )
    }
});

module.exports = ForecastHourly;
