import React from 'react';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminDashboard from './AdminController/AdminDashboard';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import StudentDashboard from './StudentController/StudentDashboard';

function App() {
  return (
    <Router>
    <div >
      <Header/>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<Home />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path={"/home"} element={<Home />} />
        <Route path={"/studentdashboard"} element={<StudentDashboard />} />
        <Route path={"/admindashboard"} element={<AdminDashboard />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
