import React, { useEffect } from "react";
import Requests from "../pages/Requests/Requests";
import { connect } from "react-redux";
import {
  setRequests,
  setStatuses,
  setPriorities,
  setUsers,
  addComments,
} from "../store/actionCreators/requestsListActionCreators";
import { RequestsListAPI } from "../api/api";

function RequestsContainer(props) {
  const addNewRequest = (name, description, comment) => {
    RequestsListAPI.addRequest(name, description, comment);
  };
  const putRequest = (id, comment, statusId, executorId) => {
    RequestsListAPI.putRequest(id, comment, statusId, executorId);
  };

  useEffect(() => {
    props.setRequests();
    props.setStatuses();
    props.setPriorities();
    props.setUsers();
  }, [props.requests]);

  return (
    <Requests
      addNewRequest={addNewRequest}
      putRequest={putRequest}
      requests={props.requests}
      setRequests={props.setRequests}
      statuses={props.statuses}
      users={props.users}
      comments={props.comments}
      addComments={props.addComments}
    />
  );
}

let mapStateToProps = (state) => ({
  requests: state.requestsList.requests,
  statuses: state.requestsList.statuses,
  users: state.requestsList.users,
  comments: state.requestsList.comments,
});

export default connect(mapStateToProps, {
  setRequests,
  setStatuses,
  setPriorities,
  setUsers,
  addComments,
})(React.memo(RequestsContainer));
