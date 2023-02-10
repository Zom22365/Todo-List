import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Component/Header";
import "../sass/form.scss";
const AddTask = () => {
  const [listToDo, setListToDo] = useState(
    localStorage.getItem("listToDo") !== null
      ? JSON.parse(localStorage.getItem("listToDo"))
      : []
  );

  const [task, setTask] = useState({
    title: "",
    toDo: "",
    check: false,
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    listToDo.push(task);
    setListToDo(listToDo);
    localStorage.setItem("listToDo", JSON.stringify(listToDo));
    navigate("/");
  };

  const handleChange = (e) => {
    const { value } = e.target;

    let obj = {
      ...task,
      [e.target.name]: value,
    };
    setTask(obj);
    console.log("obj:", obj);
  };
  return (
    <>
      <Header></Header>
      <div className="screen">
        <form action="" onSubmit={handleSubmit} className="form-add">
          <div className="form-control">
            <label htmlFor="">Title:</label>
            <input type="text" name="title" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="">Todo:</label>
            <input type="text" name="toDo" onChange={handleChange} />
          </div>
          <div className="save">
            <button>Save</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default AddTask;
