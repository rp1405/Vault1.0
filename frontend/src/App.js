import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Profile from "./components/profile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile">
        <Route path=":id" element={<Profile />} />
      </Route>
    </Routes>
  );
}
export default App;
