import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1> Hello there</h1>
      <div>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Signup</Link>
      </div>
    </>
  );
};

export default Navbar;
