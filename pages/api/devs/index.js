import dbConnect from '../../../util/mongodb';
import Dev from '../../../models/dev_model';

export default async function handler(req, res) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const devs = await Dev.find();
				res.status(200).json({ success: true, data: devs });
			} catch (err) {
				res.status(500).json({ success: false, message: err.message });
			}
			break;
		case 'POST':
			try {
				const devs = await Dev.create(req.body);
				res.status(201).json({ success: true, data: devs });
			} catch (err) {
				res.status(400).json({ success: false, message: err.message });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
