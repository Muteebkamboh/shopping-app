import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import UserContext from "./Context/userContext";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";

const App = () => {
  const user = { id: 1, name: "Muteeb Asif", age: 23, city: "Narang Mandi", hobby: "Cricket" };

  return (
    <UserContext.Provider value={user}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </UserContext.Provider>
  );
};

export default App;
