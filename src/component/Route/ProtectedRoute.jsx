import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  if (!loading) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" replace={true} />;
    } else return children;
  }
};

export default ProtectedRoute;
