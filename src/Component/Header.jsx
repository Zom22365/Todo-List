import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1 className="title">ToDo List</h1>
        <div className="btn">
          <Link to="/add-task" className="link">
            Add task
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
