import "./App.css";
import { useGetPostQuery } from "./redux/api";

function App() {
  const { isLoading, isError, isSuccess, data } = useGetPostQuery("");
  // console.log(isLoading, isError, isSuccess, data, "========");
  if (isLoading) {
    return <p>........Loader</p>;
  }
  return <div className="App">hello</div>;
}

export default App;
