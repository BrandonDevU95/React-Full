import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Auth/authContext";
import { Navigate } from "react-router-dom";

export const PublicRoter = ({ children }) => {
   const { user } = useContext(AuthContext);

   return !user.logged ? children : <Navigate to="/" />;
};
