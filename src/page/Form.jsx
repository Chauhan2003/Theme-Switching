import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div id="formPage">
      <div id="container">
        <h1>Form</h1>
        <form>
          <input type="string" name="fullName" placeholder="Full Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
