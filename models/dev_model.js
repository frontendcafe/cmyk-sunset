const mongoose = require('mongoose');

const devShema = new mongoose.Schema({
	nombre: { type: String, required: true },
	apellido: { type: String, required: true },
	nick: { type: String, required: true },
	url: String,
	linkedin: String,
	github: String,
	twitter: String,
	imagen: String,
	discord: String,
	tags: [
		{
			code: String,
		},
	],
});

module.exports = mongoose.models.Dev || mongoose.model('Dev', orderShema);
