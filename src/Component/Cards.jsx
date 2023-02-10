import React, { useState } from "react";
import Card from "./Card";

const Cards = () => {
  const [listToDo, setListToDo] = useState(
    localStorage.getItem("listToDo") !== null
      ? JSON.parse(localStorage.getItem("listToDo"))
      : []
  );

  let listTask = listToDo.map((task, index) => (
    <Card key={index} title={task.title} toDo={task.toDo} check={task.check} />
  ));

  return (
    <>
      <div>
        <ul className="list-todo">{listTask}</ul>
      </div>
    </>
  );
};
export default Cards;
