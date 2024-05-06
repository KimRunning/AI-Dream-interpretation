import connectToDatabase from "@/lib/mongoDB/connect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function saveDream(req: NextApiRequest, res: NextApiResponse) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("dream");

    if (req.method === "POST") {
      const { dream } = req.body;

      if (!dream) {
        return res.status(400).json({ message: "Dream is required" });
      }

      const result = await collection.insertOne({ dream });
      return res.status(201).json({ message: "Dream saved", result });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error saving Dream:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
