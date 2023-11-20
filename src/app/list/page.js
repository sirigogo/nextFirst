import { connectDB } from "../../../utill/database";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((data) => (
        <div className="list-item">
          <h4>{data.title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
