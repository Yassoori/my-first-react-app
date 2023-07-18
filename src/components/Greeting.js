import React, { useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("Duuuudes");

  const handleWorld = () => {
    setGreeting("World");
  };

  const handleYasser = () => {
    setGreeting("Yasser");
  };

  return (
    <div>
      <h2>Greeting</h2>
      <p>Hello {greeting}</p>
      <button onClick={handleWorld}>World</button>
      <button onClick={handleYasser}>Yasser</button>
    </div>
  );
};

export default Greeting;
