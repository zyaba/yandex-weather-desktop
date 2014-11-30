/** @jsx React.DOM */
var timeOfDay = require('../../../server/locales/timeofday.locale.js');

var ForecastFullItemRow = React.createClass({
    render: function() {
        var item = this.props.part;
        return (
            <div className="forecast-full__weather__item" style={{"backgroundColor": item.color}}>
                <div className="forecast-full__weather__degree">
                    <div className="forecast-full__title">{timeOfDay[item.type]}</div>
                    <div>{item.temp_min}&hellip;{item.temp_max}</div>
                </div>
                <div className="forecast-full__weather__precipitation">
                    <div className="forecast-full__weather__precipitation__icon"><img src={"http://ekb.shri14.ru/icons/" + item.weather_icon + ".svg"} width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" /></div>
                    <div className="forecast-full__weather__precipitation__text">{item.weather}</div>
                </div>
                <div className="forecast-full__weather__pressure">{item.pressure}</div>
                <div className="forecast-full__weather__humidity">{item.humidity}%</div>
                <div className="forecast-full__weather__wind">
                    <img className="forecast-full__weather__wind__icon" src={"http://yandex.st/weather/1.2.83/i/wind/" + item.wind_direction +".gif"} alt="" title={"Ветер: "+ item.wind  }/>
                {item.wind_speed}</div>
            </div>
        );
    }
});

module.exports = ForecastFullItemRow;

