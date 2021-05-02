const mongoose = require('mongoose');

const devShema = new mongoose.Schema({
	name: { type: String, required: true },
	lastname: { type: String, required: true },
	nick: { type: String, required: true },
	description: String,
	url: String,
	linkedin: String,
	github: String,
	twitter: String,
	image: String,
	discord: String,
	tags: [
		{
			code: String,
		},
	],
});

module.exports = mongoose.models.Dev || mongoose.model('Dev', devShema);
