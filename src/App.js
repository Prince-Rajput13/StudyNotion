import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 
import { useState } from "react";


function App() {
  const [Loggedin,setLoggedin]=useState(false);
  return(
    <div>
      <div>
        <Navbar Loggedin={Loggedin} setLoggedin={setLoggedin}/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
