/* Imports */
const express = require("express");
const router = express.Router();

/* Import routers */
const linkRouter = require("./link-router");

/* Middleware functions */
router.use("/link", linkRouter); /* v1/link */

/* Routing */
router.get("/", (req, res) => {
	res.send("API v1");
});

/* Exports */
module.exports = router;
