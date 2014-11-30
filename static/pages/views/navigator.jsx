/** @jsx React.DOM */
var ForecastNavigator = React.createClass({
    render: function() {
        return (
            <div className="forecast-navigator">
                <h3 className="forecast-navigator__city">{this.props.city}</h3>
                <div className="select select-hidden">
                    <span className="select__text">Другой город</span>
                </div>
            </div>
        );
    }
});

module.exports = ForecastNavigator;


