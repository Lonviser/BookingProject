import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "REGISTER_FAILURE",
          payload: { message: "Нет доступа!" },
        });
      }
    } catch (err) {
      dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="register">
      <div className="rContainers">
        <input
          type="text"
          placeholder="Логин"
          id="username"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="password"
          placeholder="Пароль"
          id="password"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="text"
          placeholder="Электронная почта"
          id="mail"
          onChange={handleChange}
          className="rInput"
        />
        <input
          type="phone"
          placeholder="Телефонный номер"
          id="phone"
          onChange={handleChange}
          className="rInput"
        />

        <button disabled={loading} onClick={handleClick} className="rButton">
          Зарегистрироваться
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;