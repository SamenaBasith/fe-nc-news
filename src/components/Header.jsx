import { useContext } from "react";
import { Link } from "react-router-dom"
import { UserContext } from "../userContext"

const Header = () => {
  const { user } = useContext(UserContext)

    return (
      <header className="App-header">
         <Link to="/" className="Header_link">
        <h1 className="title">NC News </h1>
        </Link>
        <p className="under-header-text">Everything you need to know all in one place!</p>
        <p> logged in as: {user.username}</p>
        <img src={user.avatar_url} alt={`${user.username}'s profile pic`} ></img>
      </header>

    );
  };
  
  export default Header;
  