/** @jsx React.DOM */
var ForecastShortItem = require('./forecast.short.item'),
    ForecastShort;
    
var ForecastShort = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" className="tabs-panel fade in active" id="short">
            <div className="forecast-short">
                {this.props.short.map(function(object, i){
                    return <ForecastShortItem day={object}/>;
                })}
            </div>
            </div>
        );
    }
});

module.exports = ForecastShort;
