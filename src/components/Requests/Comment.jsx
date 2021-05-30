import React from "react";
import c from "../../pages/Requests/Requests.module.css";

function Comment(props) {
  return (
    <div className={c.comment}>
      <div className={c.comment_header}>
        <div className={c.comment_header_img}></div>
        <div className={c.comment_header_info}>
          <div className={c.comment_header_info_author}>Иванов Александр</div>
        </div>
      </div>
      <div className={c.comment_inner}>{props.comment}</div>
    </div>
  );
}

export default Comment;
