import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  FETCH_TASKS_SUCCESS,
  GET_EDIT_TASK_ID,
} from "../constants/todo";

const initialState = {
  tasks: [],
  editId: null,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.tasks],
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case GET_EDIT_TASK_ID:
      return {
        ...state,
        editId: action.payload.id,
      };
    case EDIT_TASK_SUCCESS:
      const newLists = state.tasks.map((item) =>
        item.id === action.payload.task.id ? action.payload.task : item
      );
      return {
        ...state,
        tasks: [...newLists],
        editId: null,
      };
    case DELETE_TASK_SUCCESS:
      const newList = state.tasks.filter(
        (task) => task.id !== action.payload.id
      );
      return {
        ...state,
        tasks: [...newList],
      };
    default:
      return state;
  }
};
export default todoReducer;
