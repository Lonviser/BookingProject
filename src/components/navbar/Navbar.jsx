import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">ByWeekend</span>
        <div className="navItems">
          <button className="navButton">Зарегистрироваться</button>
          <button className="navButton">Войти</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar