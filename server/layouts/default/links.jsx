var React = require('react'),
    DefaultLayoutLinks = React.createClass({
        render: function () {
            return (
                <div className="links-wrapper">
                    <div className="links-section">
                        <h4 className="links-section__links-header">Погода на карте</h4>
                        <ul className="links-section__links-list">
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Центр России</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Россия</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Европа</a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-section">
                        <h4 className="links-section__links-header">Другие прогнозы</h4>
                        <ul className="links-section__links-list">
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Гисметео</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Гидрометцентр России</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Weather.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-section">
                        <h4 className="links-section__links-header">Погода с собой</h4>
                        <ul className="links-section__links-list">
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Информер</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Настольный виджет</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Погода в вашем браузере</a>
                            </li>
                        </ul>
                    </div>
                    <div className="links-section">
                        <h4 className="links-section__links-header">Другой вид</h4>
                        <ul className="links-section__links-list">
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">Виджет для Яндекса</a>
                            </li>
                            <li className="links-list__link-container">
                                <a href="#" className="links-list__link">В миниатюре</a>
                            </li>
                        </ul>
                    </div>
                </div>
            );
        }
    });

module.exports = DefaultLayoutLinks;
