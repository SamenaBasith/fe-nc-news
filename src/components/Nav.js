// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/Users" className="Users-link">
        Users
      </Link>
      <span> | </span>
      <Link to="/topics" className="topic-link">
        Topics
      </Link>
    </nav>
  );
};

export default Nav;
