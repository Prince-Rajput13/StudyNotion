import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import { useState } from "react";
import { PrivateRoute } from "./components/PrivateRoute"; 

function App() {
  const [Loggedin,setLoggedin]=useState(false);
  return(
    <div className="flex flex-col w-screen min-h-screen bg-richblack-900">
        <Navbar Loggedin={Loggedin} setLoggedin={setLoggedin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup setLoggedin={setLoggedin}/>} />
        <Route path="/Login" element={<Login setLoggedin={setLoggedin}/>}/>
        <Route path="/Dashboard" element={  
      <PrivateRoute Loggedin={Loggedin}>
        <Dashboard/>
      </PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App;
