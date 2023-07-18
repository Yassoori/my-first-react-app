import React from "react";
import Greeting from "../componenets/Greeting";
import Counter from "../componenets/Counter";

const Home = () => {
  return (
    <>
      <h1>My First App</h1>
      <Counter />
      <Greeting />
    </>
  );
};

export default Home;
