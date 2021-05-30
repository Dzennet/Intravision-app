import React from "react";
import c from "../../pages/Requests/Requests.module.css";
import RequestInfo from "./RequestInfo";

function RequestsTable(props) {
  let requestsTableInfo = props.requests.map((request) => (
    <RequestInfo
      key={request.id}
      id={request.id}
      name={request.name}
      statusName={request.statusName}
      executorName={request.executorName}
      statusRgb={request.statusRgb}
      setIsEdit={props.setIsEdit}
      isEdit={props.isEdit}
      setIsCreate={props.setIsCreate}
      setId={props.setId}
      setName={props.setName}
    />
  ));

  return (
    <table className={c.requests_table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Название</th>
          <th>Статус</th>
          <th>Исполнитель</th>
        </tr>
      </thead>
      <tbody>{requestsTableInfo}</tbody>
    </table>
  );
}

export default RequestsTable;
