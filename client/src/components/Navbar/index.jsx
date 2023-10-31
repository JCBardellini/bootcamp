import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Camp Display</Link>
      <Link to="/camps/new">Make a new camp</Link>
    </div>
  );
};

export default Navbar;
