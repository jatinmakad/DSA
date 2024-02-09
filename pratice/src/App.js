import { useMemo, useState } from "react";
import "./App.css";
import Comp1Exp from "./HocComp/Comp1";
import Comp2Exp from "./HocComp/Comp2";
import Search from "./Search";
import { useGetPostQuery } from "./redux/api";
import useCustomHook, { useDebounce } from "./useCustomHook";

function App() {
  // const { isLoading, isError, isSuccess, data } = useGetPostQuery("");
  // // console.log(isLoading, isError, isSuccess, data, "========");
  // if (isLoading) {
  //   return <p>........Loader</p>;
  // }
  // return <div className="App">hello</div>;

  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = useDebounce((term) => {
  //   // Perform search operation with the debounced term
  //   console.log("Searching for:", term);
  // }, 1000);

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   setSearchTerm(value);

  //   // Debounce the search callback
  //   handleSearch(value);
  // };

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const isEven = useMemo(() => {
    for (let i = 0; i < 999999999; i++) {}
    return count % 2 === 0;
  }, [count]);
  return (
    <div>
      {/* <Comp1Exp/>
    <Comp2Exp/> */}
      {/* <Search/> */}
      {/* <input value={searchTerm} onChange={handleChange} /> */}
      <button onClick={() => setCount(count + 1)}>inc {count}</button>
      {isEven ? "Even" : "Odd"}
      <button onClick={() => setCount2(count2 + 1)}>inc2 {count2}</button>
    </div>
  );
}

export default App;
