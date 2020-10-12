import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [desct, setDesct] = useState(todo.desct);

  //edit description function
  const updateDesct = async (e) => {
    e.preventDefault();
    try {
      const body = { desct };
      const response = await fetch(
        `http://localhost:5000/todo/${todo.todo_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div id={`id${todo.todo_id}`} className="modal fade" role="dialog" onClick={() => setDesct(todo.desct)}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDesct(todo.desct)}
              >
                &times;
              </button>
              <h4 className="modal-title">Edit Todo</h4>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={desct}
                onChange={(e) => setDesct(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDesct(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDesct(todo.desct)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
