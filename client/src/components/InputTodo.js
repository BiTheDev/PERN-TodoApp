import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [desct, setDesc] = useState("");

  const onSumbitForm = async e =>{
      e.preventDefault(); 
      try {
        const body = {desct};
        const response = await fetch("http://localhost:5000/todo", {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        window.location="/";
      } catch (err) {
          console.error(err.message);
          
      }
  }
  return (
    <Fragment>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSumbitForm}>
        <input
          type="text"
          className="form-control"
          value={desct}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
