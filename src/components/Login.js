import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/moviesList");
  };

  return (
    <div style={{ textAlign: "center", backgroundImage: "linear-gradient(to top, #e7a55eff 0%, #9e90caff 100%)",height:"100vh",margin:"0",padding:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column" }}>
        <h2>Movie Ticket Booking</h2>
      <input type="text" className="c1 rounded border-3 mt-5 pt-1 pb-1" placeholder="Enter username"/><br/>
      <input type="password" className="c1 rounded border-3 mt-1 pt-1 pb-1" placeholder="Enter Password"/><br/>
      <button onClick={handleLogin} className="c1 rounded bg-primary text-light mt-4 px-4 pt-1 pb-1">Login</button>
    </div>
  );
}

export default Login;
