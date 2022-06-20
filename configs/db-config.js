/* Module imports */
const mongoose = require("mongoose");
const connection = mongoose.connection;

/* Database connection string */
const DB_URI = process.env.DB_URI || `mongodb://localhost:27017/szpr`;

/* Establish connection to mongoDB */
mongoose.connect(DB_URI);

/* Exports */
module.exports = connection;
