import React, { useState } from "react";
import c from "../../pages/Requests/Requests.module.css";
import Comment from "./Comment";

function EditRequestForm(props) {
  const [status, setStatus] = useState({
    name: props.statuses[3].name,
    id: props.statuses[3].id,
  });
  const [executor, setExecutor] = useState({
    name: props.users[0].name,
    id: props.users[0].id,
  });

  const [comment, setComment] = useState("");

  const onPutHandler = () => {
    props.putRequest(props.id, comment, status.id, executor.id);
    if (comment) {
      props.addComments(comment, props.id);
      setComment("");
    }
  };

  return (
    <div className={c.request_edit}>
      <div className={c.request_edit_form_field}>
        <span htmlFor="comment">Добавить комментарий</span>
        <textarea
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          name="comment"
          id="comment"
        ></textarea>
      </div>

      <div className={c.request_edit_statuses}>
        <span>Статус</span>
        <select
          name="status"
          value={status.name}
          onChange={(e) =>
            setStatus({
              name: e.target.value,
              id: props.statuses[e.target.selectedIndex].id,
            })
          }
        >
          {props.statuses.map((status) => {
            return <option key={status.id}>{status.name}</option>;
          })}
        </select>
      </div>
      <div className={c.request_edit_executor}>
        <span>Исполнитель</span>
        <select
          name="executor"
          value={executor.name}
          onChange={(e) =>
            setExecutor({
              name: e.target.value,
              id: props.users[e.target.selectedIndex].id,
            })
          }
        >
          {props.users.map((user) => {
            return <option key={user.id}>{user.name}</option>;
          })}
        </select>
      </div>
      <button className={c.request_edit_send} onClick={() => onPutHandler()}>
        Сохранить
      </button>
      <div className={c.request_edit_comments}>
        {props.comments.map((comment) => (
          <Comment key={comment.id} comment={comment.comment} />
        ))}
      </div>
    </div>
  );
}

export default EditRequestForm;
