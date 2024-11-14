import connectToDatabase from "@/lib/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
}
