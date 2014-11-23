/** @jsx React.DOM */
var CityDropdown = React.createClass({
    render: function() {
        return (
            <div className="select select__dropdown" style={{"top": "58px", "left": "145px", "display": "none"}}>
                <p className="select__dropdown-title">Последние города</p>
                <ul className="select__dropdown-list">
                    <li className="select__dropdown-item--active">
                        <a href="#" className="select__dropdown-link">Екатеринбург</a>
                    </li>
                    <li className="select__dropdown-item">
                        <a href="#" className="select__dropdown-link">Киев</a></li>
                    <li className="select__dropdown-item">
                        <a href="#" className="select__dropdown-link">Окленд</a>
                    </li>
                </ul>
                <p className="select__dropdown-footer">
                    <a href="#" className="select__dropdown-link">Все города</a>
                </p>
            </div>
        );
    }
});

module.exports = CityDropdown;


