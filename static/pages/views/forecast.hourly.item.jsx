/** @jsx React.DOM */

ForecastHourlyItem = React.createClass({
    render: function () {
        var hour = this.props.hour,
            max = this.props.max,
            min = this.props.min,
            height = Math.abs(hour.temp*50/(Math.max(Math.abs(max), Math.abs(min)) + 2)),
            style = {
              height: height +'%',
              background: hour.color
            };
        
        return (
            <div className="forecast-hourly__item">
                <div className={ hour.temp > 0 ? 'forecast-hourly__bar forecast-hourly__bar_plus': 'forecast-hourly__bar forecast-hourly__bar_minus'} style={style}><div className="forecast-hourly__text">{hour.temp}</div></div>
                <div className="forecast-hourly__hour">{hour.hour}:00</div>                                       
            </div>
        );
    }
});

module.exports = ForecastHourlyItem;