/** @jsx React.DOM */
var ForecastHourlyItem = require('./forecast.hourly.item'),
    ForecastHourly;

ForecastHourly = React.createClass({
    render: function() {
        var min = this.props.min,
            max = this.props.max,
            half = this.props.half;
        
        return (            
            <div role="tabpanel" className="tabs-panel fade" id="hourly">                
            <div className={( half ? 'forecast-hourly forecast-hourly_half': 'forecast-hourly' )}>                
                {this.props.hours.map(function(object, i){
                    return <ForecastHourlyItem hour={object} min={min} max={max} half={half} key={i}/>;
                })}
            </div>
            </div>
        )
    }
});

module.exports = ForecastHourly;
