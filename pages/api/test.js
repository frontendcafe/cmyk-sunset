import dbConnect from "../../util/mongodb";

export default async (req, res) => {
  dbConnect();
  res.json({ test: "test" });
};
