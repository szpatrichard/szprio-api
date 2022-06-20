/* Module imports */
const validUrl = require("valid-url");
require("dotenv").config();

/* Import model */
const Link = require("../models/Link");

/* API base URL endpoint */
const baseUrl =
		`${process.env.BASE_URL}` ||
		`http://localhost:${process.env.PORT || 5000}`,
	redirectUrl = `${baseUrl}/v1/link`;

/**
 * TODO: Add comment
 * @param {*} req
 * @param {*} res
 * @returns
 */
const createLink = async (req, res) => {
	const { link, nanoId, title } = req.body;

	/* Check the base URL is valid */
	if (!validUrl.isUri(redirectUrl))
		return res.status(401).send(`Invalid base URL`);

	/* Check if the link is valid */
	if (!validUrl.isUri(link)) return res.status(401).send(`Invalid link`);

	/* Check if the title is null */
	if (title == null) return res.status(401).send(`Invalid title`);

	try {
		/* Find a document that matches with nanoId */
		let linkDocument = await Link.findOne({ nanoId });

		if (linkDocument)
			return res
				.status(401)
				.send(
					`Short link ${redirectUrl}/${linkDocument.nanoId} already exists`
				);

		/* Create a new link document */
		await Link.create({
			title,
			link,
			nanoId,
		});

		return res.sendStatus(200);
	} catch (err) {
		console.error(err);
		return res.sendStatus(500);
	}
};

/**
 * TODO: Add comment
 * @param {*} req
 * @param {*} res
 * @returns
 */
const redirect = async (req, res) => {
	const { nanoId } = req.params;

	try {
		/* Find a document that matches with nanoId */
		const linkDocument = await Link.findOne({ nanoId });

		/* Respond with a 404 NOT FOUND status if the document with the given nanoId doesn't exist */
		if (!linkDocument) return res.sendStatus(404);

		const { link, analytics } = linkDocument;

		/* Increment the clicks and save to the database */
		analytics.clicks++;
		linkDocument.save();

		/* Redirect to the original link */
		return res.status(200).redirect(link);
	} catch (err) {
		console.error(err);
		return res.sendStatus(500);
	}
};

/* Exports */
module.exports = {
	createLink,
	redirect,
};
