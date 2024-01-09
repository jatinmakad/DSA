import React, { useContext } from "react";
import { ThemeContext } from "../App";

const NewBox = () => {
  const { toogleTheme, theme } = useContext(ThemeContext);
  return (
    <div>
      {theme}
      <button onClick={() => toogleTheme()}>Change Theme</button>
    </div>
  );
};

export default NewBox;
