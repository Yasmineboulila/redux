import { ADD_TASK, EDIT_TASK,TOGGLE_TASK } from "./actionType";

export const addTask = (id, description) => ({
  type: ADD_TASK,
  payload: { id, description }
});
export const editTask=( { id, description })=>(
  {type:EDIT_TASK,
  payload: { id, description }}
)
export const toggleTask=( { id})=>({
  type:TOGGLE_TASK,
  payload:id
})

