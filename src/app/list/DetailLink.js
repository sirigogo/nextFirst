"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";

const DetailLink = () => {
  let router = useRouter();
  let a = useParams();
  let b = useSearchParams();
  return (
    <button
      onClick={() => {
        router.push("/list");
      }}
    >
      버튼
    </button>
  );
};

export default DetailLink;
