// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../lib/mongo";

export default async function handler(req, res) {
  const params = req.params;
  console.log(params);
  await dbConnect();
  res.status(200).json({ name: "John Doe" });
}
