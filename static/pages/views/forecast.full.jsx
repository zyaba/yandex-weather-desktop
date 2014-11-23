/** @jsx React.DOM */
var ForecastFullItem = require('./forecast.full.item'),
    ForecastFull;

ForecastFull = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.apiData.forecast.map(function(object, i){
                    return <ForecastFullItem apiData={object} day={i}/>;
                })}
            </div>
        );
    }
});

module.exports = ForecastFull;


