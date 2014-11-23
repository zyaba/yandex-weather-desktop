/** @jsx React.DOM */
var React = require('react');
var DefaultLayout = require('../layouts/default/main'),
    Navigator = require('./navigator'),
    ForecastToday= require('./forecast.today'),
    ForecastFull = require('./forecast.full'),
    ForecastShort = require('./forecast.short'),
    CityDropDown = require('./city.dropdown'),
    //ForecastHourly = require('./forecast.hourly'),
    DetailsMenu = require('./details.menu');

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
                
            </DefaultLayout>
        );
    }
});

module.exports = Index;
