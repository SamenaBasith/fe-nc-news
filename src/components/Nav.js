// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
  <nav className="nav">
  <Link to="/Users" className="Users-link">
    Log in
  </Link>

  


  <div className="sidebar">
    <div>topic 1</div>
    <div>topic 2</div>
    <div>topic 3</div>
  </div>
</nav>
);
};

export default Nav;
