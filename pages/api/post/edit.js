import { ObjectId } from "mongodb";
import { connectDB } from "../../../utill/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let 바꿀거 = { title: 요청.body.title, content: 요청.body.content };
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .updateOne({ _id: new ObjectId(요청.body._id) }, { $set: 바꿀거 });
  }
}
