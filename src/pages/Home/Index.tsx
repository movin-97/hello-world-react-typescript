import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const logout = () => {
    dispatch({
      type: "logout",
    });
    navigate("/login", { replace: true });
  };
  
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="d-flex justify-content-between align-items-center w-100 px-4">
          <Link to={"/"} className="text-white navbar-brand">
            React
          </Link>
          <button className="btn btn-primary" onClick={() => logout()}>
            Logout
          </button>
        </div>
      </nav>
      <button className="btn btn-primary m-2 col-2" onClick={() => navigate('/dashboard')}>
          DashBoard
        </button>
      <main className="w-50 mx-auto">
        
        <h1 className="text-center p-4">React sample project</h1>
        <div>
          <ul className="w-50 mx-auto">
            <li className="p-2 fs-5">Lazy loading</li>
            <li className="p-2 fs-5">Form validation</li>
            <li className="p-2 fs-5">Store Management</li>
            <li className="p-2 fs-5">DI Pattern</li>
            <li className="p-2 fs-5">Routing with guard</li>
            <li className="p-2 fs-5">Bootstrap</li>
          </ul>
        </div>
      </main>
    </div>
  );
};
export default Home;
