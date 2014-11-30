/** @jsx React.DOM */
var ForecastFullItem = require('./forecast.full.item'),
    ForecastFull;

ForecastFull = React.createClass({
    render: function () {
        return (
            <div role="tabpanel" id="full" className="tabs-panel fade in">
                {this.props.full.map(function(object, i){
                    return <ForecastFullItem day={object} item={i} key={i}/>;
                })}
            </div>
        );
    }
});

module.exports = ForecastFull;


