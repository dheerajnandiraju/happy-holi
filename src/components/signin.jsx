import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";

const Signin = ({ names }) => {
  const handleChange = (e) => {
    names(e.target.value);
  };

  return (
    <div className="box">
      <div className="center">
        <h2>Enter your name</h2>
        <input
          onChange={handleChange}
          id="name"
          style={{ fontSize: "1.5rem" }}
          type="text"
        />
        <Link className="button" to="/wishes">
          {" "}
          OKAY
        </Link>
      </div>
    </div>
  );
};

export default Signin;
