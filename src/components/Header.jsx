import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
      <header className="App-header">
         <Link to="/" className="Header_link">
        <h1 className="title">NC News </h1>
        </Link>
        <p className="under-header-text">Everything you need to know all in one place!</p>
      </header>

    );
  };
  
  export default Header;
  