# Yandex Weather
Weather forecasts page

## Ecosystem
Install [Bower](http://bower.io/) and [Grunt](http://gruntjs.com/)
```bash
npm install -g bower
npm install -g grunt
```
Install all of the dependencies, including the server ones
```bash
bower install
npm install
cd server
npm install
```
Run the default Grunt task to prepare required files
```bash
grunt
```
Run the server from the 'server' folder ...
```bash
node server.js
```
... or from the root folder using grunt task
```bash
grunt express
```

Now the server should be up and running on [localhost:8080](http://localhost:8080/)

## Code-Style Convention
Install [.editorconfig](http://editorconfig.org/) plugin for you editor or IDE in order to maintain consistent coding styles  
Run the following Grunt task to setup pre-commit hook, that runs checks code-style before every commit is made
```bash
grunt setup
```

## Contributing

1. Fork it
2. Create your feature branch 
3. Commit your changes 
4. Push to the branch
5. Create new Pull Request

## Team

- Anastasiya ([@tenebricosa](https://github.com/tenebricosa))
- Andrew ([@zyaba](https://github.com/zyaba))
- Maksim ([@drzoom3](https://github.com/drzoom3))
- Nikita ([@Ellaylone](https://github.com/Ellaylone))
