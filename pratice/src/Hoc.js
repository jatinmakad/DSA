import React, { useState } from "react";

const Hoc = (Component) => {
  const WrapperComponent = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount((prev) => {
        return prev + 1;
      });
    };
    const decrement = () => {
      setCount((prev) => {
        return prev - 1;
      });
    };
    return (
      <Component
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
  return WrapperComponent;
};

export default Hoc;
