/** @jsx React.DOM */
var moment = require('moment'),
    ForecastFullItemItem = require('./forecast.full.item.row'),
    ForecastFullItem;

ForecastFullItem = React.createClass({
    render: function () {
        var date = moment( this.props.apiData.date );
        
        return (
            <div className="forecast-full">
                <div className="forecast-full__date">
                    <div className="forecast-full__date__weekday">{date.format('dd')}</div>
                    <div className="forecast-full__date__monthday">
                        <div className="forecast-full__date__monthday__day">{date.get('date')}</div>
                        <div className="forecast-full__date__monthday__month">{date.format('MMMM')}</div>
                    </div>
                </div>
                <div className="forecast-full__weather">
                {(function( scope ){
                    if ( scope.props.day === 0 ) {
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
                    
                    {this.props.apiData.parts.map(function(object, i){
                        // morning, day, evening, night
                        if ( i < 4 ) {
                            return <ForecastFullItemItem apiData={object} />;
                        }
                    })}
                </div>
                <div className="forecast-full__sunrise">
                    <div className="forecast-full__title">восход</div>
                    <div>{this.props.apiData.sunrise}</div>
                </div>
                <div className="forecast-full__sunset">
                    <div className="forecast-full__title">заход</div>
                    <div>{this.props.apiData.sunset}</div>
                </div>
                <div className="forecast-full__moon">
                    <img className="forecast-full__moon__icon" src={"http://ekb.shri14.ru/icons/icon_moon_" + this.props.apiData.moon_code + ".svg"} width="24" height="24" alt="Убывающая луна" title="Убывающая луна" />
                </div>
                <div className="forecast-full__magnetic">
                    <div className="forecast-full__title">магнитное поле:</div>
                    <div>{( this.props.apiData.biomet ? this.props.apiData.biomet.message: 'нет данных' )}</div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastFullItem;
