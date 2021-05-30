import { RequestsListAPI } from "../../api/api";
import {
  GET_REQUESTS,
  GET_STATUSES,
  GET_PRIORITIES,
  GET_USERS,
  ADD_COMMENT,
} from "../constants/requestsListConstants";

let commentId = Date.now();

const getRequests = (requests) => ({ type: GET_REQUESTS, requests });
const getStatuses = (statuses) => ({ type: GET_STATUSES, statuses });
const getPriorities = (priorities) => ({ type: GET_PRIORITIES, priorities });
const getUsers = (users) => ({ type: GET_USERS, users });
export const addComments = (comment, taskId) => ({
  type: ADD_COMMENT,
  comment,
  taskId,
  id: commentId,
});

export const setRequests = () => async (dispatch) => {
  let requests = await RequestsListAPI.getRequests();
  dispatch(getRequests(requests.value));
};

export const setStatuses = () => async (dispatch) => {
  let statuses = await RequestsListAPI.getStatuses();
  dispatch(getStatuses(statuses));
};

export const setPriorities = () => async (dispatch) => {
  let priorities = await RequestsListAPI.getPriorities();
  dispatch(getPriorities(priorities));
};
export const setUsers = () => async (dispatch) => {
  let users = await RequestsListAPI.getUsers();
  dispatch(getUsers(users));
};
