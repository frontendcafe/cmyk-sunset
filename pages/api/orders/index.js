import dbConnect from '../../../util/mongodb';
import Order from '../../../models/order_model';

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const orders = await Order.find();
				res.status(200).json({ success: true, data: orders });
			} catch (err) {
				res.status(500).json({ success: false, message: err.message });
			}
			break;
		case 'POST':
			try {
				const order = await Order.create(req.body);
				res.status(201).json({ success: true, data: order });
			} catch (err) {
				res.status(400).json({ success: false, message: err.message });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
