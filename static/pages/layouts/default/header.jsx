var DefaultLayoutHeader = React.createClass({
    render: function () {
        return (
            <header className="header">
                <div className="header__section header__logo">
                    <a href="//www.yandex.ru">
                        <img src="http://yastatic.net/www/2.131/yaru/i/logo.png" alt="Яндекс" width="100" height="44"/>
                    </a>
                </div>
   
                <script src="http://yastatic.net/jquery/2.1.1/jquery.js"></script>
                <script src="http://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle.js"></script>
                <script src="dist/js/suggest.js"></script>
                <div className="header__section header__city-search-wrapper">
                    <form>
                        <div className="city-search__section-link-wrapper">
                            <a href="#" className="section-link">Погода</a>
                        </div>
                        <div className="city-search__label-triangle"></div>
                        <div className="city-search__actions-wrapper">
                            <input className="city-search__input" placeholder={this.props.city}/>
                            <span className="city-search__clear-btn"></span>
                        </div>
                        <button type="submit" className="city-search__submit-btn">Найти</button>
                    </form>
                </div>

                <div className="header__section header__account-wrapper">
                    <div className="header__user-avatar-wrapper">
                        <img className="header__user-avatar" src="http://www.hottoysuk.co.uk/terminator/images/t1000-sarah-connor-disguise_small.jpg"/>
                    </div>

                    <div className="header__user-name-wrapper">
                        <span className="user-name__first-letter">S</span>
                        <span className="user-name__rest-letters">arah Connor</span>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = DefaultLayoutHeader;
