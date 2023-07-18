import React from "react";
import Greeting from "../components/Greeting";
import Counter from "../components/Counter";

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
