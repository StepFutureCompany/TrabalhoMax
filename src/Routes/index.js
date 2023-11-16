import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Login from "../pages/Login";
import EmployeeData from "../pages/EmployeeData";
import Ponto from "../pages/Ponto";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dados" element={<EmployeeData />} />
        <Route path="/ponto" element={<Ponto />} />
      </Routes>
    </Router>
  );
}
