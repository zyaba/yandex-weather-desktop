/** @jsx React.DOM */
var ForecastFullItem = require('./forecast.full.item'),
    ForecastFull;

ForecastFull = React.createClass({
    render: function () {
        return (
            <div>
                {this.props.full.map(function(object, i){
                    return <ForecastFullItem day={object} item={i}/>;
                })}
            </div>
        );
    }
});

module.exports = ForecastFull;


