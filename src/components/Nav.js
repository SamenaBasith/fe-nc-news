// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Topics from "./Topics";

const Nav = () => {
  return (
  <nav className="nav">
  <Link to="/Users" className="Users-link">
    Log in
  </Link>
  <div className="sidebar">
    <Topics/>
  </div>
</nav>
);
};

export default Nav;
