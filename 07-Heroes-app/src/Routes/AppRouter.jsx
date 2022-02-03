import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DcScreen } from '../Components/DC/DcScreen';
import { LoginScreen } from '../Components/Login/LoginScree';
import { MarvelScreen } from '../Components/Marver/MarverlScreen';
import { SearchScreen } from '../Components/Search/SearchScreen';
import { Navbar } from '../Components/UI/Navbar';

export const AppRouter = () => {
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<MarvelScreen />} />
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/dc" element={<DcScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/login" element={<LoginScreen />} />
         </Routes>
      </BrowserRouter>
   );
};
