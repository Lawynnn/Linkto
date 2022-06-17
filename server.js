const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('../routes/routes');
const routes_api = require('../routes/routes.api');
const body_parser = require('body-parser');

const app = express();

const exphbs = require('express-handlebars');

app.set('port', process.env.PORT || 3000);

app
    .use(session({
        secret: 'bictore085327GF3322',
        resave: false,
        saveUninitialized: true
    }))
    .use("/", routes)
    .use("/api/v1/", routes_api)
    .use(body_parser.json())
    .use(body_parser.urlencoded({extended: false}))
    .use(express.static("./public"))


const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: "./views/layouts/"
})

var helpers = require('handlebars-helpers')({
    handlebars: hbs.handlebars
});

hbs.handlebars.registerHelper('minimize', function(passedString, length = 15) {
    var theString = passedString.toString().length > length ? passedString.substring(0,length - 5) + "..." : passedString;
    return new hbs.handlebars.SafeString(theString)
});

app.engine('hbs', hbs.engine);

app.set('view engine', 'hbs');


module.exports = app;