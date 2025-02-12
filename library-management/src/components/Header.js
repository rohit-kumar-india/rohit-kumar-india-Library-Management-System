import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import { getUserType, removeUserSession } from "../utils/Session";


const Header=()=>{
  const navigate = useNavigate();

  const handleLogout = (e) =>{
    e.preventDefault();
    removeUserSession();
    navigate("/home");
  }

    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="#"><h3>Library Management System</h3></a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <div className="navbar-nav me-auto">
      </div>
        <Link className="nav-link" to="/home">Home</Link>
        <Link className="nav-link" to="/login" state={{ userType: "Student" }}>Student</Link>
        <Link className="nav-link" to="/login" state={{ userType: "Admin" }}>Admin</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/signup">
          <button className="btn btn-primary">Sign Up</button>
        </Link>
        <Link className="nav-link" to="/login" state={{ userType: getUserType }}>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </Link>
        
    </div>
  </div>
</nav>
</div>
    );
}
export default Header;