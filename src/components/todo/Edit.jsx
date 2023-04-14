import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editTask } from "../../actions/todo";
import { EDIT_TASK_SUCCESS } from "../../constants/todo";
const Edit = () => {
  const [task, setTask] = useState("");
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let task = tasks.find((task) => task.id === id);
    setTask(task);
  }, []);

  const handleUpdate = () => {
    dispatch({ type: EDIT_TASK_SUCCESS, payload: { task } });
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
                <h4 class="card-title">Edit Todo</h4>
                <div class="add-items d-flex">
                  <input
                    type="text"
                    className="form-control todo-list-input"
                    placeholder="What do you need to do today?"
                    value={task.task}
                    onChange={(e) => setTask({ ...task, task: e.target.value })}
                  />
                  <button
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    onClick={handleUpdate}
                    disabled={task.task ? false : true}
                  >
                    Update
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

export default Edit;
