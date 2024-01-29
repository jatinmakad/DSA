import React from "react";
import Hoc from "../Hoc";

const Comp1 = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={() => decrement()}>-</button>
      {count}
      <button onClick={() => increment()}>+</button>
    </div>
  );
};

const Comp1Exp = Hoc(Comp1);
export default Comp1Exp;
