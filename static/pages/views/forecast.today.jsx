/** @jsx React.DOM */
var ForecastToday = React.createClass({
    render: function () {
        var weatherToday = this.props.apiData.forecast[0];
        
        return (
            <div className="weather-main">
                <div className="weather-main__container">
                    <span className="weather-main__when">сегодня</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">{this.props.apiData.fact.temp} °C</span>
                        <div className="weather-main__icon"></div>
                        <span className="weather-main__condensation">{this.props.apiData.fact.weather}</span>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">днем</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">{this.props.apiData.forecast[0].parts[1].temp} °C</span>
                        <div className="weather-main__icon"></div>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">вечером</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">{this.props.apiData.forecast[0].parts[2].temp} °C</span>
                        <div className="weather-main__icon"></div>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">ночью</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">{this.props.apiData.forecast[0].parts[3].temp} °C</span>
                        <div className="weather-main__icon"></div>
                    </div>
                </div>
                <div className="weather-main__additional">
                    <span className="weather-main__when"></span>
                    <p className="weather-main__line">Давление: {this.props.apiData.fact.pressure} мм рт. ст.</p>
                    <p className="weather-main__line">Ветер: {this.props.apiData.fact.wind}, {this.props.apiData.fact.wind_speed} м/с ( ~ км/ч)</p>
                    <p className="weather-main__line">Влажность: {this.props.apiData.fact.humidity}%</p>
                    <p className="weather-main__line--margin-5-bottom">Восход: {weatherToday.sunrise} Заход: {weatherToday.sunset}</p>
                    <p className="weather-main__line">Данные зарегистрированы недавно</p>
                    <div className="tip"></div>
                </div>
                <div className="weather-main__yesterday">
                вчера {this.props.apiData.yesterday.temp} °C
                </div>
            </div>
        );
    }
});

module.exports = ForecastToday;

