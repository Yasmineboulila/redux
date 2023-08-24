import { ADD_TASK } from "./actionType";
import { GET_TASK } from "./actionType";
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const updateTask = (task) => ({
  type: GET_TASK,
  payload: task,
});