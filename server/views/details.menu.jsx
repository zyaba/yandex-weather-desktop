/** @jsx React.DOM */
var React = require('react');

var DetailsMenu = React.createClass({
    render: function() {
        return (
            <div style={{"margin": "50px"}}>
                <div className="tabs">
                    <button className="tabs__item">кратко</button>
                    <button className="tabs__item tabs__item_active">подробно</button>
                    <button className="tabs__item">наглядно</button>
                </div>
            </div>
        );
    }
});

module.exports = DetailsMenu;
