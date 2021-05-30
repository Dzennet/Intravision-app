import React, { useState } from "react";
import c from "./Requests.module.css";
import EditRequestForm from "../../components/Requests/EditRequestForm";
import CreateRequestForm from "../../components/Requests/CreateRequestForm";
import RequestsTable from "../../components/Requests/RequestsTable";
import RequestsFormHeader from "../../components/Requests/RequestsFormHeader";

function Requests(props) {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const [id, setId] = useState(null);
  const [name, setName] = useState("");

  return (
    <div className={c.requests}>
      <div className={c.requests_options}>
        <button
          onClick={() => {
            setIsCreate(true);
            setIsEdit(false);
          }}
          className={c.requests_options_add_btn}
        >
          Создать заявку
        </button>
      </div>
      <div className={c.requests_main}>
        <RequestsTable
          requests={props.requests}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          setIsCreate={setIsCreate}
          setId={setId}
          setName={setName}
        />

        {isCreate || isEdit ? (
          <div className={c.request}>
            <RequestsFormHeader
              setIsEdit={setIsEdit}
              isEdit={isEdit}
              setIsCreate={setIsCreate}
              name={name}
              id={id}
            />
            <div className={c.request_form_main}>
              {isCreate ? (
                <CreateRequestForm
                  isCreate={isCreate}
                  setIsCreate={setIsCreate}
                  addNewRequest={props.addNewRequest}
                  putRequest={props.putRequest}
                  statuses={props.statuses}
                  setId={setId}
                  setIsEdit={setIsEdit}
                  requests={props.requests}
                />
              ) : null}
              {isEdit ? (
                <EditRequestForm
                  statuses={props.statuses}
                  users={props.users}
                  putRequest={props.putRequest}
                  addComments={props.addComments}
                  comments={props.comments.filter(
                    (comment) => comment.taskId === id
                  )}
                  id={id}
                />
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Requests;
