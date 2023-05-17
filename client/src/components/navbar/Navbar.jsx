import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "./navbar.css"
import {Link} from "react-router-dom";
import LogoutButton from "../logoutButton/LogoutButton";

const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">ByWeekend</span>
        </Link>
        <div>

        {user? user.username : (
        <div className="navItems">
        <Link to="/register"> 
          <button className="navButton">Зарегистрироваться</button>
        </Link>
        <Link to="/login"> 
          <button className="navButton">Войти</button>
          </Link>
        </div>)}
        {user?  <LogoutButton /> :(
          ""
        )}
        </div>
        
      </div>
    </div>
  )
}

export default Navbar