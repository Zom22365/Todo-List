import React, { useState } from "react";
import Cards from "../Component/Cards";
import Header from "../Component/Header";
import "../sass/cards.scss";
import "../sass/card.scss";

const Dashboard = () => {
  return (
    <>
      <Header></Header>
      <Cards></Cards>
    </>
  );
};

export default Dashboard;
