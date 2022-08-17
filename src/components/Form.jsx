import React from "react";
import "../components/Form.css";


function Form() {
  return (
    <div className="form">
      <input type="text" name="firstName" placeholder="First Name" />
      <input type="text" name="surname" placeholder="Surname" />
      <input type="tel" name="mobile" placeholder="Mobile" />
      <input type="password" name="password" placeholder="New Password" />

      <div className="dob">
        <p>Date of Birth</p>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>

      <p className="text">Gender</p>
      <div className="radio">
        <label For="gender">
          Male
          <input type="radio" />
        </label>
        <label For="gender">
          Female
          <input type="radio" />
        </label>
        <label For="gender">
          Custom
          <input type="radio" />
        </label>
      </div>
    </div>
  );
}

export default Form;
