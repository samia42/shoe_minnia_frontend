import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
<<<<<<< HEAD
    const {loading,isAuthenticated,user}= useSelector(state=>state.user)
    if(loading===false){
        if(isAuthenticated===false){
            return <Navigate to='/login' replace={true}/>
        }
        else return children;
    }
    
=======
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  if (!loading) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" replace={true} />;
    } else return children;
  }
>>>>>>> 4a0af096d2222fb7cee9036179eca9d5ae7c5648
};

export default ProtectedRoute;
