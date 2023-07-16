import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./config";
async function fetchData(id) {
  try {
    const allData = await axios.get(BASE_URL + "/api/v1/data/" + id);
    return allData;
  } catch (err) {
    console.log(err);
  }
}
const handleClick = async (id, newData) => {
  if (!window.confirm("Are u sure u want to save the following changes?"))
    return;
  try {
    await axios.patch(BASE_URL + "/api/v1/data", {
      query: { username: id },
      changes: { data: newData },
    });
    alert("Database Updated!");
  } catch (error) {
    console.log(error);
  }
};
const deleteData = async (id) => {
  try {
    await axios.delete(BASE_URL + "/api/v1/data/" + id);
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (id) => {
  try {
    await axios.delete(BASE_URL + "/api/v1/tasks/" + id);
  } catch (error) {
    console.log(error);
  }
};
export default function Profile() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [allData, setAllData] = useState({});
  useEffect(() => {
    fetchData(id).then((data) => {
      setAllData(data.data);
    });
  }, []);
  const name = allData.name;
  const [currData, setData] = useState("");
  return (
    <div className="login-page">
      <div className="form">
        <div className="login-form acrylic">
          <span>{name}</span>
          <textarea
            type="text"
            rows={10}
            defaultValue={allData.data}
            onChange={(e) => setData(e.target.value)}
          />
          <button
            type="button"
            className="button"
            onClick={() => handleClick(id, currData)}
          >
            UPDATE
          </button>
          <div className="profileMessage">
            <a
              href=""
              className="message"
              onClick={() => {
                navigate("../../");
              }}
            >
              Logout&nbsp;&nbsp;
            </a>
            <a
              href=""
              className="message"
              onClick={() => {
                if (
                  !window.confirm("Are u sure u want to delete your account?")
                )
                  return;
                deleteData(id);
                deleteUser(id);
                alert("Account Deleted!");
                navigate("../../");
              }}
            >
              Delete Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
