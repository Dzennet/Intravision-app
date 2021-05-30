import {
  GET_REQUESTS,
  GET_STATUSES,
  GET_PRIORITIES,
  GET_USERS,
  ADD_COMMENT,
} from "../constants/requestsListConstants";

let initState = {
  requests: [],
  statuses: [],
  priorities: [],
  users: [],
  comments: [],
};

function requestsListReducer(state = initState, action) {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.requests,
      };
    case GET_STATUSES:
      return {
        ...state,
        statuses: action.statuses,
      };
    case GET_PRIORITIES:
      return {
        ...state,
        priorities: action.priorities,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          { comment: action.comment, id: action.id, taskId: action.taskId },
        ],
      };

    default:
      return state;
  }
}

export default requestsListReducer;
