/** @jsx React.DOM */
var React = require('react'),
    DefaultLayoutHeader = require('./header'),
    DefaultLayoutLinks = require('./links'),
    DefaultLayoutFooter = require('./footer');

var DefaultLayout = React.createClass({
    render: function () {
        return (
            <html>
                <head lang="en">
                    <title>{this.props.title}</title>
                    
                    <meta charSet="UTF-8"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                        
                    <link rel="stylesheet" href="/dist/weather.min.css"/>
                    <link rel="stylesheet" type="text/css" href="bower_components/normalize.css/normalize.css" />
                    <link rel="stylesheet" type="text/css" href="dist/weather.min.css" media="screen" />
                </head>
                <body>
                    <div className="page__wrapper">
                        <DefaultLayoutHeader></DefaultLayoutHeader>

                        {this.props.children}

                        <DefaultLayoutLinks></DefaultLayoutLinks>
                        <DefaultLayoutFooter></DefaultLayoutFooter>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = DefaultLayout;
