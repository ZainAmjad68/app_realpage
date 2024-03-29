const express = require("express");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(awsServerlessExpressMiddleware.eventContext());
app.use(helmet());

const routes = require("./routes");
app.use("/api", routes);

app.set("view engine", "ejs");

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
