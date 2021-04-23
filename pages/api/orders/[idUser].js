import dbConnect from '../../../util/mongodb';
import Order from '../../../models/order_model';

export default async function handler(req, res) {
	var idUser = req.query.idUser;

	await dbConnect();

	try {
		const orders = await Order.find({ userId: idUser });
		if (orders.length == 0) {
			return res.status(404).json({ success: false, message: 'no existe' });
		} else {
			res
				.status(200)
				.json({ success: true, data: orders, count: orders.length });
		}
	} catch (err) {
		res.status(500).json({ success: false, message: err.message });
	}
}
