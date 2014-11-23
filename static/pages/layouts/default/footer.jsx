var DefaultLayoutFooter = React.createClass({
        render: function () {
            return (
                <footer className="footer">
                    <div className="footer-section footer__ya-links">
                        <ul className="footer-section__links-list">
                            <li className="footer-links__link-item">
                                <a href="#" className="footer__footer-link">Пользовательское соглашение</a>
                            </li>
                            <li className="footer-links__link-item">
                                <a href="#" className="footer__footer-link">Мобильная версия</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section footer__stats">
                    Прогноз погоды: Екатеринбург и еще 12268 городов в 229 странах
                        <br/>
                    Данные предоставлены
                        <a href="#">FORECA</a>
                    </div>
                    <div className="footer-section footer__feedback-links">
                        <ul className="footer-section__links-list">
                            <li className="footer-links__link-item">
                                <a href="#" className="footer__footer-link">Статистика</a>
                            </li>
                            <li className="footer-links__link-item">
                                <a href="#" className="footer__footer-link">Обратная связь</a>
                            </li>
                            <li className="footer-links__link-item">
                                <a href="#" className="footer__footer-link">Реклама</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section footer__copyright">
                    &copy;&nbsp;2000-2014&nbsp;&laquo;
                        <a href="http://ya.ru">Яндекс</a>
                    &raquo;
                    </div>
                </footer>
            );
        }
    });

module.exports = DefaultLayoutFooter;
