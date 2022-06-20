/* Module imports */
const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const app = express();

/* Database connection */
require("./configs/db-config");

/* Import router */
const apiRouter = require("./api-router");

/* Middleware functions */
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* Routing */
app.use("/", apiRouter);

/* Catch 404 and forward to error handler */
app.use((req, res, next) => {
	next(createError(404));
});

/* Error handler */
app.use((err, req, res) => {
	/* Set locals, only providing error in development */
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	/* Send the error message */
	res.sendStatus(err.status || 500);
});

/* Exports */
module.exports = app;
