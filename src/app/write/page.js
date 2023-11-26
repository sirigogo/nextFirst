import React from "react";

const Write = () => {
  return (
    <div>
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input type="text" name="title" />
        <input type="text" name="content" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
};

export default Write;
