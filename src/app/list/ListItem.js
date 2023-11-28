"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

const ListItem = ({ result }) => {
  return (
    <div>
      {result.map((data, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${data._id}`}>
            <h4>{data.title}</h4>
          </Link>
          <Link href={`/edit/${data._id}`}>수정</Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: data._id,
              })
                .then((r) => {
                  if (r.status == 200) {
                    return r.json();
                  } else {
                    //서버가 에러코드전송시 실행할코드
                  }
                })
                .then((result) => {
                  //성공시 실행할코드
                })
                .catch((error) => {
                  //인터넷문제 등으로 실패시 실행할코드
                  console.log(error);
                });
            }}
          >
            삭제
          </span>
          <p>1월 1일</p>
          <DetailLink />
        </div>
      ))}
    </div>
  );
};

export default ListItem;
