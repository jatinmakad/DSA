import React, { useState } from "react";
import Box from "./components/Box";

interface Person {
  name: string;
  age: number;
}
function App() {
  const [user, setUser] = useState<Person>({
    name: "",
    age: 0,
  });
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user, "user");
  };
  // const [value, setValue] = useState<string>("");
  return (
    <>
      <div>
        {/* <Box heading={"hello"} count={23} func1={(a: string) => console.log(a)}>
          <p>hello ji</p>
        </Box> */}
        {/* <Box label="Enter Name" value={value} onChange={setValue} />  */}
        <Box user={user} setUser={setUser} submit={submit} />
      </div>
    </>
  );
}

export default App;
