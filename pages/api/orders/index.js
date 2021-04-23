import dbConnect from '../../../util/mongodb';
import Order from '../../../models/order_model';

export default async function handler(req, res) {
	await dbConnect();
	try {
		const orders = await Order.find();
		res.status(200).json({ success: true, data: orders });
	} catch (err) {
		res.status(500).json({ success: false, message: err.message });
	}
}
