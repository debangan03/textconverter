import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextFormx from "./components/TextFormx";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("primary");
  const [alert, setalert] = useState(null);

  const togglemode = () => {
    if (mode === "primary") {
      setmode("dark");
      document.body.style.backgroundColor = "#0a3a48";
      showalert("Dark Mode Enabled","Success");
    } else {
      setmode("primary");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled","Success");
    }
  };
  const showalert = (msg, type) => {
    setalert({ msg: msg, type: type })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  return (
    
    <BrowserRouter>
    <Navbar mode={mode} togglemode={togglemode} alert={alert} />
    <Alert alert={alert} />
     <Routes>
     
     <Route
        path="/"
        element={<div className="container">
        <TextFormx heading="Enter Your Text Bellow" mode={mode} showalert={showalert} />
      </div>}
      />
     <Route
        path="/About"
        element={<div className="container mx-7 my-3">
        <About mode={mode} showalert={showalert} />
      </div>}
      />
     
    </Routes>
    </BrowserRouter>
      
      
    
  );
}

export default App;
