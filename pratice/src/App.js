import "./App.css";
import Comp1Exp from "./HocComp/Comp1";
import Comp2Exp from "./HocComp/Comp2";
import { useGetPostQuery } from "./redux/api";

function App() {
  // const { isLoading, isError, isSuccess, data } = useGetPostQuery("");
  // // console.log(isLoading, isError, isSuccess, data, "========");
  // if (isLoading) {
  //   return <p>........Loader</p>;
  // }
  // return <div className="App">hello</div>;


  return <div>
    <Comp1Exp/>
    <Comp2Exp/>
  </div>
}

export default App;
