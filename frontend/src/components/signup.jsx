import "./signup.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// const BASE_URL = "http://localhost:3006";
const BASE_URL = "https://vault-backend-yw55.onrender.com";
function Signup() {
  const [user_name, setName] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await axios.get(BASE_URL + "/api/v1/tasks/find/" + user);
    } catch (err) {
      console.log(err);
      alert("This username is already taken");
      return;
    }
    try {
      const data = await axios.post(BASE_URL + "/api/v1/tasks", {
        name: user_name,
        username: user,
        password: pass,
      });
      const secrets = await axios.post(BASE_URL + "/api/v1/data", {
        name: user_name,
        username: user,
        data: "",
      });
      console.log(secrets);
    } catch (err) {
      console.log(err);
    }
    alert("Account Created");
    navigate("../");
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form acrylic">
          <span>VAULT</span>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Set up username"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Set up Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button type="button" className="button" onClick={handleClick}>
            Create Account
          </button>
          <Link className="message" to="../">
            Back to login
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Signup;
