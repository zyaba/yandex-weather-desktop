/** @jsx React.DOM */
var ForecastFullItemRow = React.createClass({
    render: function() {
        return (
            <div className="forecast-full__weather__item">
                <div className="forecast-full__weather__degree">
                    <div className="forecast-full__title">утром</div>
                    <div>{this.props.apiData.temp_min}&hellip;{this.props.apiData.temp_max}</div>
                </div>
                <div className="forecast-full__weather__precipitation">
                    <img className="forecast-full__weather__precipitation__icon" src={"http://ekb.shri14.ru/icons/" + this.props.apiData.weather_icon + ".svg"} width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                        {this.props.apiData.weather}
                </div>
                <div className="forecast-full__weather__pressure">{this.props.apiData.pressure}</div>
                <div className="forecast-full__weather__humidity">{this.props.apiData.humidity}%</div>
                <div className="forecast-full__weather__wind">
                    <img className="forecast-full__weather__wind__icon" src={"http://yandex.st/weather/1.2.83/i/wind/" + this.props.apiData.wind_direction +".gif"} alt="" title={"Ветер: "+ this.props.apiData.wind  }/>
                {this.props.apiData.wind_speed}</div>
            </div>
        );
    }
});

module.exports = ForecastFullItemRow;

