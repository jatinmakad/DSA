import React, { ReactNode, Dispatch } from "react";

// type ProptType = {
//   heading: string;
//   count: number;
//   func1: (a: string) => void;
//   children: ReactNode;
// };

// const Box = ({ heading, count, func1, children }: ProptType) => {
//   func1("12");
//   return (
//     <div>
//       <h1>{heading}</h1>
//       <p>{count}</p>
//       {children}
//     </div>
//   );
// };

// export default Box;

// type InputValType = string | number;
// const Box = <T extends InputValType>({
//   label,
//   value,
//   onChange,
// }: {
//   label: string;
//   value: T;
//   onChange: Dispatch<React.SetStateAction<T>>;
// }) => {
//   return (
//     <form>
//       <label>{label}</label>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => onChange(e.target.value as T)}
//       />
//       <button>Submit</button>
//     </form>
//   );
// };

// export default Box;

type InputValue = string | number;
const Box = <T extends InputValue>({
  user,
  setUser,
  submit,
}: {
  user: {
    name: string;
    age: number;
  };
  setUser: Dispatch<React.SetStateAction<T>>;
  submit: React.FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={submit}>
      <input
        type="number"
        placeholder="Age"
        value={user?.age || 0}
        onChange={(e) =>
          setUser((prev) => {
            return { ...prev, age: Number(e.target.value) };
          })
        }
      />
      <input
        type="text"
        placeholder="User"
        value={user?.name || ""}
        onChange={(e) =>
          setUser((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Box;
