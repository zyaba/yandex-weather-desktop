/** @jsx React.DOM */
var ForecastFullItem = require('./forecast.full.item'),
    ForecastFull;

ForecastFull = React.createClass({
    render: function () {
        return (
            <div style={{"margin": "50px"}}>
                {this.props.apiData.forecast.map(function(object, i){
                    return <ForecastFullItem apiData={object} />;
                })}
            </div>
        );
    }
});

module.exports = ForecastFull;


