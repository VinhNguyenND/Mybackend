const express =require( "express");
const bodyParser = require("body-parser");
const viewEngine =require( "../src/config/viewEngine");
const Database = require("./config/dataBase");
const initWebRoutes = require("./route/web");
const cors = require('cors');
const session = require('express-session');
const { fa } = require("@faker-js/faker");

const app = express();
app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(flush);
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: false,
    cookie: {
        maxAge:600000,
    }
}))


viewEngine(app);
initWebRoutes(app);

new Database();

let port = process.env.PORT || 8080;  

app.use((req, res, next) => {
    res.locals.message = req.session.message;
    delete req.session.message;
    next();
})//alert
app.listen(port, () => {
    console.log("Backend Nodejs is running on the port: " + port);
})
