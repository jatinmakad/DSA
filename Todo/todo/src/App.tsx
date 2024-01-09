import React, { ReactNode, createContext, useState } from "react";
import NewBox from "./components/NewBox";
// import Box from "./components/Box";

type ThemeType = "light" | "dark";
interface ThemeContextType {
  theme: ThemeType;
  toogleTheme: () => void;
}
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toogleTheme: () => {},
});


// also same if we don't pass anything -
// const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvoider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const toogleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


// interface Person {
//   name: string;
//   age: number;
// }
function App() {
  //   const [user, setUser] = useState<Person>({
  //     name: "",
  //     age: 0,
  //   });
  //   const submit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     console.log(user, "user");
  //   };
  // const [value, setValue] = useState<string>("");
  return (
    <>
      <ThemeProvoider>
        <div>
          {/* <Box heading={"hello"} count={23} func1={(a: string) => console.log(a)}>
          <p>hello ji</p>
        </Box> */}
          {/* <Box label="Enter Name" value={value} onChange={setValue} />  */}
          {/* <Box user={user} setUser={setUser} submit={submit} /> */}
          <NewBox/>
        </div>
      </ThemeProvoider>
    </>
  );
}

export default App;
