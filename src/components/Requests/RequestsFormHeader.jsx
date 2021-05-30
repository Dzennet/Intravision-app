import React from "react";
import c from "../../pages/Requests/Requests.module.css";

function RequestsFormHeader(props) {
  return (
    <div className={c.request_form_header}>
      <div className={c.request_form_header_title}>
        {props.isEdit ? (
          <>
            <div className={c.request_form_header_title_id}>{props.id}</div>
            <div className={c.request_form_header_title_name}>
              {props.name && props.name.length > 35
                ? `${props.name.substr(0, 35)}...`
                : props.name}
            </div>
          </>
        ) : (
          "Новая заявка  "
        )}
      </div>
      <button
        onClick={() => props.setIsEdit(false) || props.setIsCreate(false)}
        className={c.request_form_header_close}
      >
        х
      </button>
    </div>
  );
}

export default RequestsFormHeader;
