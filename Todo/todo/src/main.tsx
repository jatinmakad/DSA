import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
// import ReducerComp from './components/Reducer.tsx'
import ReduxIndex from "./Redux/Index.tsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ReducerComp/> */}
    <Provider store={store}>
      <ReduxIndex />
    </Provider>
  </React.StrictMode>
);
