import Link from "next/link";
import { connectDB } from "../../../utill/database";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((data, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${data._id}`}>
            <h4>{data.title}</h4>
          </Link>
          <Link href={`/edit/${data._id}`}>수정</Link>
          <p>1월 1일</p>
          <DetailLink />
        </div>
      ))}
    </div>
  );
}
