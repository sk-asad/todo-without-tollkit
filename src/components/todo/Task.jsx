import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../actions/todo";
import { Link } from "react-router-dom";
import { DELETE_TASK_SUCCESS, EDIT_TASK_SUCCESS } from "../../constants/todo";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TASK_SUCCESS, payload: { id: id } });
  };

  const handleCheckbox = () => {
    dispatch({ type: EDIT_TASK_SUCCESS, payload: { task: { ...task, completed: !task.completed } } });
  };
  return (
    <li>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            checked={task.completed}
            onChange={handleCheckbox}
          />
          {task.task}
          <i class="input-helper"></i>
        </label>
      </div>
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => handleDelete(task.id)}
      ></i>
      <Link to={`/edit/${task.id}`}>
        <i className="fa fa-edit"></i>
      </Link>
    </li>
  );
};

export default Task;
