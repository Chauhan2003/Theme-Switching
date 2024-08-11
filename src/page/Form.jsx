import React, { useContext } from "react";
import "./Form.scss";
import { ThemeContext } from "../context";

const Form = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div id="formPage" className={theme ? "light" : "dark"}>
      <button onClick={toggleTheme} id="theme">
        {theme ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
      <div id="container" className={theme ? "light" : "dark"}>
        <h1>Form</h1>
        <form>
          <input type="text" name="fullName" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit" className={theme ? "light" : "dark"}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
