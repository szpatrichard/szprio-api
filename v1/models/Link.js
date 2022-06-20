/* Module imports */
const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const Schema = mongoose.Schema;

/* Instantiate a mongoose schema */
const LinkSchema = new Schema({
	analytics: {
		clicks: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	date: {
		createdAt: {
			type: Date,
			required: true,
			default: Date.now,
		},
	},
	link: {
		type: String,
		required: true,
	},
	nanoId: {
		type: String,
		required: true,
		unique: true,
		default: nanoid(10),
	},
	title: {
		type: String,
		required: true,
	},
});

/* Create a model from schema */
const model = mongoose.model("Link", LinkSchema);

/* Export Link model */
module.exports = model;
