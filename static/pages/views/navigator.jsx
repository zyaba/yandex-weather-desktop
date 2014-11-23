/** @jsx React.DOM */
var ForecastNavigator = React.createClass({
    render: function() {
        return (
            <div className="forecast-navigator">
                <h3 className="forecast-navigator__city">Екатерибург</h3>
                <div className="select">
                    <span className="select__text">Другой город</span>
                </div>
            </div>
        );
    }
});

module.exports = ForecastNavigator;


