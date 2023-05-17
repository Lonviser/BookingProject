import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const LogoutButton = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login"); // Перенаправление на страницу входа после выхода из аккаунта
  };

  return (
    <button onClick={handleLogout} className="lButton">
      Выйти
    </button>
  );
};

export default LogoutButton;