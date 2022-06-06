import clientPromise from "../../../../../lib/mongodb";

export default async function handler(req, res) {

    const client = await clientPromise;
    const db = client.db("sample_mflix");
    const { genres } =req.query;
    const movie = await db.collection("movies").find({genres:genres}).toArray();
    res.json({ status: 200, data: movie });
}