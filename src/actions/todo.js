import {
  FETCH_TASKS,
  ADD_TASK,
  GET_EDIT_TASK_ID,
  EDIT_TASK,
  DELETE_TASK,
} from "../constants/todo";

export const fetchTasks = () => ({
  type: FETCH_TASKS,
});

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: { task },
});

export const getEditTaskId = (id) => ({
  type: GET_EDIT_TASK_ID,
  payload: { id },
});

export const editTask = (task) => ({
  type: EDIT_TASK,
  payload: { task },
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id },
});
