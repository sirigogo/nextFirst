import { connectDB } from "../../../utill/database";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    if ((요청.body.title = "")) {
      return 응답.status(200).json("제목안씀");
    }
    try {
      const db = (await connectDB).db("forum");
      let result = await db.collection("post").insertOne(요청.body);
      return 응답.status(200).redirect("/list");
    } catch (err) {
      console.log(err);
    }
  }
}
