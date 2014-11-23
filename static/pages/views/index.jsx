/** @jsx React.DOM */
var DefaultLayout = require('../layouts/default/main'),
    Navigator = require('./navigator'),
    ForecastToday= require('./forecast.today.jsx'),
    ForecastFull = require('./forecast.full.jsx'),
    ForecastShort = require('./forecast.short.jsx'),
    CityDropDown = require('./city.dropdown.jsx'),
    ForecastHourly = require('./forecast.hourly.jsx'),
    DetailsMenu = require('./details.menu.jsx');

var Index = React.createClass({
    render: function() {
        return (
            <DefaultLayout title={this.props.title}>
                <Navigator></Navigator>
                <ForecastToday></ForecastToday>
                <DetailsMenu></DetailsMenu>
                <ForecastFull></ForecastFull>
                <ForecastShort></ForecastShort>
                <CityDropDown></CityDropDown>
                
                <div id="hint__forecast-base" className="hint" style={{"top": "198px", "left": "524px", "display": "none"}}>
                    <p className="hint__text">На основе прогноза</p>
                </div>

                <ForecastHourly></ForecastHourly>
            </DefaultLayout>
        );
    }
});

module.exports = Index;
