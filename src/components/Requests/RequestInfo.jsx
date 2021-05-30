import React from "react";
import c from "../../pages/Requests/Requests.module.css";

function RequestInfo(props) {
  return (
    <tr
      onClick={() => {
        props.setIsCreate(false);
        props.setIsEdit(true);
        props.setId(props.id);
        props.setName(props.name);
      }}
    >
      <th className={c.requests_table_body_id}>{props.id}</th>
      <th className={c.requests_table_body_name}>{props.name}</th>
      <th
        style={{ color: `${props.statusRgb}` }}
        className={c.requests_table_body_status}
      >
        {props.statusName}
      </th>
      <th className={c.requests_table_body_executor}>{props.executorName}</th>
    </tr>
  );
}

export default RequestInfo;
