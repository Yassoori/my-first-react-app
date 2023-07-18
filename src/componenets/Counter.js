import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment - Add One</button>
      <button onClick={handleDecrement}>Decrement - Minus One</button>
    </div>
  );
};

export default Counter;
