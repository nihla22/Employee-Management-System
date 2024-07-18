import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import Employee from "./components/Employee";
import Manage from "./components/Manage";
import LoginForm from "./components/Login";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navigator isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home onLogout={handleLogout} />} />
        <Route
          path="/loginform"
          element={<LoginForm onLogin={handleLogin} />}
        />
        {isLoggedIn && (
          <>
            <Route path="/employee" element={<Employee />} />
            <Route path="/manage" element={<Manage />} />
            <Route path="/" element={<Home onLogout={handleLogout} />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
