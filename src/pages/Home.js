import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log("Hello Vamshi");
    loadUsers();
  }, []); //This empty array is used to run this useeffect only once, the page is loaded

  const loadUsers = async () => {
    //async and await is used to tell js that to wait here until you get the respose or else it will go on executing to the next line without waiting for the response
    const result = await axios.get(
      "https://springbootcrudoperations-production.up.railway.app/getAllUsers"
    );
    console.log(result.data);
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    const deleted = await axios.delete(
      `https://springbootcrudoperations-production.up.railway.app/removeUser/${id}`
    );
    loadUsers();
  };
  // function deleteUser(id) {
  //   console.log("Hello");
  //   console.log(id);
  // }
  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table border shawdow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">User Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {user.id}
                  </th>
                  <td>{user.name}</td>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      type="button"
                      class="btn btn-primary mx-2"
                      data-bs-toggle=" "
                      to={`/viewuser/${user.id}`}
                    >
                      Views
                    </Link>
                    <Link
                      type="button"
                      class="btn btn-primary mx-2"
                      data-bs-toggle=" "
                      to={`/edituser/${user.id}`}
                    >
                      Update
                    </Link>
                    <button
                      type="button"
                      class="btn btn-danger mx-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
