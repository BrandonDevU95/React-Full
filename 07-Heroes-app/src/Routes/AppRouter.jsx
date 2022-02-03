import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../Components/Login/LoginScree';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/*" element={<DashboardRoutes />} />
         </Routes>
      </BrowserRouter>
   );
};
