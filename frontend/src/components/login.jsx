import { useState } from "react";
import "./login.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "./config";
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const data = await axios.get(BASE_URL + "/api/v1/tasks/" + user);
      if (data.data.password === pass) {
        alert("Success");
        navigate("/profile/" + user);
      } else {
        alert("Wrong username or password");
      }
    } catch (err) {
      alert("USER NOT FOUND");
      console.log(err);
    }
  };
  return (
    <div className="login-page dataPage">
      <div className="form">
        <form className="login-form acrylic">
          <span>VAULT</span>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button type="button" className="button" onClick={handleClick}>
            Login
          </button>
          <Link className="message" to="/signup">
            Dont have an account? Create One!
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Login;
