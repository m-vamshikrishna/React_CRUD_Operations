import React from 'react'
export default function Navbar() {
    const handleClick = () => {
        window.location.href = '/addUser';
        //navigate("/addUser")
      };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">FullStack With React and Spring Boot</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <button className='btn btn-outline-light' onClick={handleClick}>Add User</button>
  </div>
</nav>
    </>
  )
}
