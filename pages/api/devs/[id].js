import dbConnect from '../../../util/mongodb';
import Dev from '../../../models/dev_model';

export default async function handler(req, res) {
	var idDev = req.query.id;

	await dbConnect();

	try {
		const dev = await Dev.find({ _id: idDev });
		if (dev.length == 0) {
			return res.status(404).json({ success: false, message: 'no existe' });
		} else {
			res
				.status(200)
				.json({ success: true, data: dev, count: dev.length });
		}
	} catch (err) {
		res.status(500).json({ success: false, message: err.message });
	}
}
