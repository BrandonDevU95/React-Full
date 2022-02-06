import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../Components/Login/LoginScree";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoter } from "./PrivateRoter";
import { PublicRoter } from "./PublicRoter";

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/login"
               element={
                  <PublicRoter>
                     <LoginScreen />
                  </PublicRoter>
               }
            />
            <Route
               path="/*"
               element={
                  <PrivateRoter>
                     <DashboardRoutes />
                  </PrivateRoter>
               }
            />
            {/* <Route path="/*" element={<DashboardRoutes />} /> */}
         </Routes>
      </BrowserRouter>
   );
};
