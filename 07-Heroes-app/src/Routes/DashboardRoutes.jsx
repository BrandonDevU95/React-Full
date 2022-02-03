import { Route, Routes } from 'react-router-dom';
import { DcScreen } from '../Components/DC/DcScreen';
import { HeroScreen } from '../Components/Hero/HeroScreen';
import { MarvelScreen } from '../Components/Marver/MarverlScreen';
import { SearchScreen } from '../Components/Search/SearchScreen';
import { Navbar } from '../Components/UI/Navbar';

export const DashboardRoutes = () => {
   return (
      <>
         <Navbar />
         <div className="container">
            <Routes>
               <Route path="marvel" element={<MarvelScreen />} />
               <Route path="dc" element={<DcScreen />} />
               <Route path="search" element={<SearchScreen />} />
               <Route path="/hero" element={<HeroScreen />} />
               <Route path="/" element={<MarvelScreen />} />
            </Routes>
         </div>
      </>
   );
};
