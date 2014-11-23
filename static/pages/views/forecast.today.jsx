/** @jsx React.DOM */
var ForecastToday = React.createClass({
    render: function () {
        return (
            <div className="weather-main">
                <div className="weather-main__container">
                    <span className="weather-main__when">сегодня</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">+30 °C</span>
                        <div className="weather-main__icon"></div>
                        <span className="weather-main__condensation">малооблачно</span>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">днем</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">+30 °C</span>
                        <div className="weather-main__icon"></div>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">вечером</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">+30 °C</span>
                        <div className="weather-main__icon"></div>
                    </div>
                </div>
                <div className="weather-main__container">
                    <span className="weather-main__when">ночью</span>
                    <div className="weather-main__forecast">
                        <span className="weather-main__degree">+30 °C</span>
                        <div className="weather-main__icon"></div>
                    </div>
                </div>
                <div className="weather-main__additional">
                    <span className="weather-main__when"></span>
                    <p className="weather-main__line">Давление: 735 мм рт. ст.</p>
                    <p className="weather-main__line">Ветер: северо-восточный, 2.7 м/с (9.7 км/ч)</p>
                    <p className="weather-main__line">Влажность: 72%</p>
                    <p className="weather-main__line--margin-5-bottom">Восход: 06:36 Заход: 21:24</p>
                    <p className="weather-main__line">Данные зарегистрированы недавно</p>
                    <div className="tip"></div>
                </div>
                <div className="weather-main__yesterday">
                вчера +10 °C
                </div>
            </div>
        );
    }
});

module.exports = ForecastToday;

