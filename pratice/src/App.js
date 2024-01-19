import logo from "./logo.svg";
import "./App.css";
import { useGetPostQuery } from "./redux/api";

function App() {
  const { isLoading, isError, isSuccess, data } = useGetPostQuery("");
  // console.log(isLoading, isError, isSuccess, data, "========");
  if (isLoading) {
    return <p>........Loader</p>;
  }
  return <div className="App"></div>;
}

export default App;
