import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};

export default Protected;
