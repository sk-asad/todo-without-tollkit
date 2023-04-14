import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { addTask } from "../../actions/todo";
import { ADD_TASK_SUCCESS } from "../../constants/todo";

const Add = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAdd = () => {
    dispatch({ type: ADD_TASK_SUCCESS, payload: { task: { id: nanoid(), task: task, completed: false } } });
    setTask("");
    navigate("/");
  };
  return (
    <div class="page-content page-container" id="page-content">
      <div class="padding">
        <div class="row container d-flex justify-content-center">
          <div class="col-md-12">
            <div class="card px-3">
              <div class="card-body">
                <h4 class="card-title">Add Todo</h4>
                <div class="add-items d-flex">
                  <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                  />
                  <button
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    onClick={handleAdd}
                    disabled={task ? false : true}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
