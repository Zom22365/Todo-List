import React, { useState } from "react";

const Card = (props) => {
  const [listToDo, setListToDo] = useState(
    JSON.parse(localStorage.getItem("listToDo"))
  );
  const [isCheck, setIsCheck] = useState(props.check);
  const handleChange = (e) => {
    const { checked } = e.target;

    listToDo.map((item, index) => {
      if (item.title === props.title) {
        listToDo[index].check = checked;
        setIsCheck(!isCheck);
      }
    });
    localStorage.setItem("listToDo", JSON.stringify(listToDo));
  };
  return (
    <>
      <div className="card">
        <div className="block-check">
          <input
            type="checkbox"
            className="check"
            onClick={handleChange}
            checked={isCheck}
          />
        </div>
        <div>
          <h2 className="title-todo"> {props.title}</h2>
          <div className="name-todo">{props.toDo}</div>
        </div>
      </div>
    </>
  );
};

export default Card;
