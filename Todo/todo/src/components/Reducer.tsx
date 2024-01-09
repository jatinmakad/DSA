import React, { useReducer } from "react";

type InitialType = {
  count: number;
};
type ActionType =
  | {
      type: "Increment";
      payload: number;
    }
  | {
      type: "Decrement";
      payload: number;
    };

const initalState: InitialType = {
  count: 0,
};
const reducer = (state: InitialType, action: ActionType): InitialType => {
  switch (action?.type) {
    case "Increment":
      return { count: state?.count + action?.payload };
    case "Decrement":
      return { count: state?.count - action?.payload };
    default:
      return state;
  }
};

const ReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "Increment", payload: 1 })}>
        plus
      </button>
      {state?.count}
      <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
        minu
      </button>
    </div>
  );
};

export default ReducerComp;
