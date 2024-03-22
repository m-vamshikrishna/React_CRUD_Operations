import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  useEffect(() => {
    loadUser();
  }, []);
  let navigate = useNavigate();
  let { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });
  const { name, userName, email } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(
      `https://springbootcrudoperations-production.up.railway.app/updateUser/${id}`,
      user
    );
    navigate("/");
  };
  const loadUser = async (e) => {
    const result = await axios.get(
      `https://springbootcrudoperations-production.up.railway.app/user/${id}`
    );
    setUser(result.data);
  };

  const backToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h3 className="text-center m-4">Add New User</h3>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type={"text"}
                  placeholder="Enter Your Name"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">UserName</label>
                <input
                  type={"text"}
                  placeholder="Enter Your User Name"
                  className="form-control"
                  name="userName"
                  value={userName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type={"text"}
                  placeholder="Enter Your Email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button type="submit" className="btn btn-outline-primary mx-3">
                Submit
              </button>
              <button className="btn btn-outline-danger" onClick={backToHome}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
