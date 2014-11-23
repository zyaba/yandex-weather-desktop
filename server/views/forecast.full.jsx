/** @jsx React.DOM */
var React = require('react');

var ForecastFull = React.createClass({
    render: function () {
        return (
            <div style={{"margin": "50px"}}>
                <div className="forecast-full">
                    <div className="forecast-full__date">
                        <div className="forecast-full__date__weekday">вт</div>
                        <div className="forecast-full__date__monthday">
                            <div className="forecast-full__date__monthday__day">28</div>
                            <div className="forecast-full__date__monthday__month">октября</div>
                        </div>
                    </div>
                    <div className="forecast-full__weather">
                        <div className="forecast-full__weather__header">
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
                        <div className="forecast-full__weather__item">
                            <div className="forecast-full__weather__degree">
                                <div className="forecast-full__title">утром</div>
                                <div>−5&hellip;−4</div>
                            </div>
                            <div className="forecast-full__weather__precipitation">
                                <img className="forecast-full__weather__precipitation__icon" src="http://ekb.shri14.ru/icons/ovc.svg" width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                            облачно с прояснениями
                            </div>
                            <div className="forecast-full__weather__pressure">740</div>
                            <div className="forecast-full__weather__humidity">70%</div>
                            <div className="forecast-full__weather__wind">
                                <img className="forecast-full__weather__wind__icon" src="http://yandex.st/weather/1.2.83/i/wind/w.gif" alt="" title="Ветер: западный"/>
                            4.9</div>
                        </div>
                        <div className="forecast-full__weather__item">
                            <div className="forecast-full__weather__degree">
                                <div className="forecast-full__title">утром</div>
                                <div>−5&hellip;−4</div>
                            </div>
                            <div className="forecast-full__weather__precipitation">
                                <img className="forecast-full__weather__precipitation__icon" src="http://ekb.shri14.ru/icons/ovc.svg" width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                            облачно с прояснениями
                            </div>
                            <div className="forecast-full__weather__pressure">740</div>
                            <div className="forecast-full__weather__humidity">70%</div>
                            <div className="forecast-full__weather__wind">
                                <img className="forecast-full__weather__wind__icon" src="http://yandex.st/weather/1.2.83/i/wind/w.gif" alt="" title="Ветер: западный"/>
                            4.9</div>
                        </div>
                        <div className="forecast-full__weather__item">
                            <div className="forecast-full__weather__degree">
                                <div className="forecast-full__title">утром</div>
                                <div>−5&hellip;−4</div>
                            </div>
                            <div className="forecast-full__weather__precipitation">
                                <img className="forecast-full__weather__precipitation__icon" src="http://ekb.shri14.ru/icons/ovc.svg" width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                            облачно с прояснениями
                            </div>
                            <div className="forecast-full__weather__pressure">740</div>
                            <div className="forecast-full__weather__humidity">70%</div>
                            <div className="forecast-full__weather__wind">
                                <img className="forecast-full__weather__wind__icon" src="http://yandex.st/weather/1.2.83/i/wind/sw.gif" alt="" title="Ветер: западный"/>
                            4.9</div>
                        </div>
                    </div>
                    <div className="forecast-full__sunrise">
                        <div className="forecast-full__title">восход</div>
                        <div>07:57</div>
                    </div>
                    <div className="forecast-full__sunset">
                        <div className="forecast-full__title">заход</div>
                        <div>17:57</div>
                    </div>
                    <div className="forecast-full__moon">
                        <img className="forecast-full__moon__icon" src="http://ekb.shri14.ru/icons/icon_moon_7.svg" width="24" height="24" alt="Убывающая луна" title="Убывающая луна" />
                    </div>
                    <div className="forecast-full__magnetic">
                        <div className="forecast-full__title">магнитное поле:</div>
                        <div>слабо возмущенное</div>
                    </div>
                </div>

                <div className="forecast-full">
                    <div className="forecast-full__date forecast-full__date_holiday">
                        <div className="forecast-full__date__weekday">вт</div>
                        <div className="forecast-full__date__monthday">
                            <div className="forecast-full__date__monthday__day">29</div>
                            <div className="forecast-full__date__monthday__month">октября</div>
                        </div>
                    </div>
                    <div className="forecast-full__weather">
                        <div className="forecast-full__weather__item">
                            <div className="forecast-full__weather__degree">
                                <div className="forecast-full__title">утром</div>
                                <div>−5&hellip;−4</div>
                            </div>
                            <div className="forecast-full__weather__precipitation">
                                <img className="forecast-full__weather__precipitation__icon" src="http://ekb.shri14.ru/icons/ovc.svg" width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                            облачно с прояснениями
                            </div>
                            <div className="forecast-full__weather__pressure">740</div>
                            <div className="forecast-full__weather__humidity">70%</div>
                            <div className="forecast-full__weather__wind">
                                <img className="forecast-full__weather__wind__icon" src="http://yandex.st/weather/1.2.83/i/wind/w.gif" alt="" title="Ветер: западный"/>
                            4.9</div>
                        </div>
                        <div className="forecast-full__weather__item">
                            <div className="forecast-full__weather__degree">
                                <div className="forecast-full__title">утром</div>
                                <div>−5&hellip;−4</div>
                            </div>
                            <div className="forecast-full__weather__precipitation">
                                <img className="forecast-full__weather__precipitation__icon" src="http://ekb.shri14.ru/icons/ovc.svg" width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                            облачно с прояснениями
                            </div>
                            <div className="forecast-full__weather__pressure">740</div>
                            <div className="forecast-full__weather__humidity">70%</div>
                            <div className="forecast-full__weather__wind">
                                <img className="forecast-full__weather__wind__icon" src="http://yandex.st/weather/1.2.83/i/wind/w.gif" alt="" title="Ветер: западный"/>
                            4.9</div>
                        </div>
                        <div className="forecast-full__weather__item">
                            <div className="forecast-full__weather__degree">
                                <div className="forecast-full__title">утром</div>
                                <div>−5&hellip;−4</div>
                            </div>
                            <div className="forecast-full__weather__precipitation">
                                <img className="forecast-full__weather__precipitation__icon" src="http://ekb.shri14.ru/icons/ovc.svg" width="30" height="30" alt="облачно с прояснениями" title="облачно с прояснениями" />
                            облачно с прояснениями
                            </div>
                            <div className="forecast-full__weather__pressure">740</div>
                            <div className="forecast-full__weather__humidity">70%</div>
                            <div className="forecast-full__weather__wind">
                                <img className="forecast-full__weather__wind__icon" src="http://yandex.st/weather/1.2.83/i/wind/w.gif" alt="" title="Ветер: западный"/>
                            4.9</div>
                        </div>
                    </div>
                    <div className="forecast-full__sunrise">
                        <div className="forecast-full__title">восход</div>
                        <div>07:57</div>
                    </div>
                    <div className="forecast-full__sunset">
                        <div className="forecast-full__title">заход</div>
                        <div>17:57</div>
                    </div>
                    <div className="forecast-full__moon">
                        <img className="forecast-full__moon__icon" src="http://ekb.shri14.ru/icons/icon_moon_5.svg" width="24" height="24" alt="Убывающая луна" title="Убывающая луна" />
                    </div>
                    <div className="forecast-full__magnetic">
                        <div className="forecast-full__title">магнитное поле:</div>
                        <div>слабо возмущенное</div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ForecastFull;


