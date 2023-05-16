import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import "./navbar.css"
import {Link} from "react-router-dom";
const Navbar = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit",textDecoration:"none"}}>
        <span className="logo">ByWeekend</span>
        </Link>
        {user? user.username : (
        <div className="navItems">
          <button className="navButton">Зарегистрироваться</button>
          <button className="navButton">Войти</button>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar