/** @jsx React.DOM */
var moment = require('moment'),
    momentLocales = require('../../../server/locales/moment.locale.js'),
    ForecastFullItemItem = require('./forecast.full.item.row'),
    ForecastFullItem;

moment.locale( 'ru', momentLocales );

ForecastFullItem = React.createClass({
    render: function () {
        var day = this.props.day,
            date = moment( day.date );
        
        return (
            <div className={( (date.get('day') == 0 || date.get('day') == 6) ? 'forecast-full forecast-full_holiday': 'forecast-full' )}>
                <div className="forecast-full__date">
                    <div className="forecast-full__date__weekday">{date.format('dd')}</div>
                    <div className="forecast-full__date__monthday">
                        <div className="forecast-full__date__monthday__day">{date.get('date')}</div>
                        <div className="forecast-full__date__monthday__month">{date.format('MMMM')}</div>
                    </div>
                </div>
                <div className="forecast-full__weather">
                {(function( scope ){
                    if ( scope.props.item === 0 ) {
                        return <div className="forecast-full__weather__header">
                            <div className="forecast-full__weather__degree"></div>
                            <div className="forecast-full__weather__precipitation"></div>
                            <div className="forecast-full__weather__pressure">
                                <div className="forecast-full__title">давление,
                                    <br/>
                                мм&nbsp;рт.&nbsp;ст.</div>
                            </div>
                            <div className="forecast-full__weather__humidity">
                                <div className="forecast-full__title">влажность</div>
                            </div>
                            <div className="forecast-full__weather__wind">
                                <div className="forecast-full__title">ветер,
                                    <br/>
                                м/с</div>
                            </div>
                        </div>
                    }
                })( this )}
                    
                    {day.parts.map(function(object, i){
                        // morning, day, evening, night
                        // todo не возвращать больше 4х
                        if ( i < 4 ) {
                            return <ForecastFullItemItem part={object} />;
                        }
                    })}
                </div>
                <div className="forecast-full__sunrise">
                    <div className="forecast-full__title">восход</div>
                    <div>{day.sunrise}</div>
                </div>
                <div className="forecast-full__sunset">
                    <div className="forecast-full__title">заход</div>
                    <div>{day.sunset}</div>
                </div>
                <div className="forecast-full__moon">
                    <img className="forecast-full__moon__icon" src={"http://ekb.shri14.ru/icons/icon_moon_" + day.moon_code + ".svg"} width="24" height="24" alt="Убывающая луна" title="Убывающая луна" />
                </div>
                <div className="forecast-full__magnetic">
                    <div className="forecast-full__title">магнитное поле:</div>
                    <div>{( day.biomet ? day.biomet.message: 'нет данных' )}</div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastFullItem;
