import React from "react";
import Hoc from "../Hoc";

const Comp2 = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      {count}
      <button onClick={() => increment()}>+</button>
    </div>
  );
};

const Comp2Exp = Hoc(Comp2);
export default Comp2Exp;
