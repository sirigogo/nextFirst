import React from "react";
import { connectDB } from "../../../../utill/database";
import { ObjectId } from "mongodb";

const Edit = async (props) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  await db
    .collection("post")
    .updateOne(
      { _id: new ObjectId(props.params.id) },
      { $set: { title: "바보", content: "바보2" } }
    );
  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input type="hidden" name="_id" defaultValue={result._id.toString()} />
        <input type="text" name="title" defaultValue={result.title} />
        <input type="text" name="content" defaultValue={result.content} />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
};

export default Edit;
