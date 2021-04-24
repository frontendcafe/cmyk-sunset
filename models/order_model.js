const mongoose = require('mongoose');

const orderShema = new mongoose.Schema({
	userId: { type: String, required: true },
	userName: { type: String, required: true },
	totalAmount: { type: Number, required: true },
	itemsCount: Number,
	orderStatus: String,
	payMethod: String,
	payId: String,
	payStatus: String,
	deliveryMethod: String,
	deliveryAdress: String,
	delivered: Date,
	finished: Boolean,
	createdAt: Date,
	updatedAt: Date,
	items: [
		{
			id_item: mongoose.Schema.Types.ObjectId,
			idMarve: String,
			title: String,
			quantity: Number,
			price: Number,
			total: Number,
		},
	],
});

module.exports = mongoose.models.Order || mongoose.model('Order', orderShema);
