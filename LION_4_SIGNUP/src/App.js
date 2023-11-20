import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./signup.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link></Link>
      </header>
      <hr />
      <main>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </main>
    </BrowserRouter>
    
  );
}

export default App;