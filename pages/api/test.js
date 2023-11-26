export default function handlter(요청, 응답) {
  console.log("ddd");
  return 응답.status(200).json("처리완료");
}
