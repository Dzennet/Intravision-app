import React, { useState } from "react";
import c from "../../pages/Requests/Requests.module.css";

function CreateRequestForm(props) {
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const onAddHandler = () => {
    props.addNewRequest(name, description, comment);
    props.setIsCreate(false);
    props.setIsEdit(true);
    props.setId(props.requests[props.requests.length - 1].id);
  };

  return (
    <div className={c.request_create}>
      <div className={c.request_create_form}>
        <div className={c.request_create_form_field}>
          <span>Название</span>
          <textarea
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            id="name"
          ></textarea>
        </div>
        <div className={c.request_create_form_field}>
          <span>Описание</span>
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            id="description"
          ></textarea>
        </div>
        <div className={c.request_create_form_field}>
          <span>Добавление комментариев</span>
          <textarea
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="comment"
            id="comment"
          ></textarea>
        </div>
        <button
          className={c.request_create_form_send}
          onClick={() => onAddHandler()}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default CreateRequestForm;
