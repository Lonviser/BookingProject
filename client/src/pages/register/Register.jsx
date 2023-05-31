import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./register.css";
import {Link} from "react-router-dom";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "", // Добавлено поле email
    phone: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const res = await axios.post("/auth/register", credentials);
      if (res.data.isAdmin) {
        navigate("/");
      } else {
        setError("Пользователь зарегистрирован!");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className="register">
      <div className="rContainers">
        <input
          type="text"
          placeholder="Логин"
          id="username"
          value={credentials.username}
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Пароль"
          id="password"
          value={credentials.password}
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="email" // Используется тип email для ввода email
          placeholder="Электронная почта"
          id="email" // Используется id "email"
          value={credentials.email} // Используется значение из состояния
          onChange={handleChange} // Используется обработчик изменения
          className="rInput"
        />
        <input
          type="phone"
          placeholder="Телефонный номер"
          id="phone"
          value={credentials.phone}
          onChange={handleChange}
          className="rInput"
        />

        <button onClick={handleClick} className="rButton">
          Зарегистрироваться
        </button>
        <h3 className="login-not">Есть аккаунт?</h3>
        <Link to="/login"> 
          <button className="regButton">Авторизоваться</button>
        </Link>
        {error && <span>{error}</span>}
        
      </div>
      
    </div>
    
  );
};

export default Register;