/* Module imports */
const express = require("express");
const api = express.Router();

/* Import routers */
const v1Router = require("./v1/routes/router");

/* Middleware functions */
api.use("/v1", v1Router); /* /v1 */

/* Routing */
api.get("/", (req, res) => {
	res.sendStatus(404);
});

/* Exports */
module.exports = api;
