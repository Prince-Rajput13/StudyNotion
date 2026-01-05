import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 

function App() {
  return(
    <div>
      <div>
        <Navbar/>
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
