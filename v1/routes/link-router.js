/* Imports */
const express = require("express");
const router = express.Router();

/* Import controllers */
const { createLink, redirect } = require("../controllers/link-controller");

/**
 * @route		GET /v1/link/:nanoId
 * @description	Redirect to the original link
 * */
router.get("/:nanoId", redirect);

/**
 * @route		POST /v1/link
 * @description	Create a short link
 * */
router.post("/", createLink);

/* Exports */
module.exports = router;
