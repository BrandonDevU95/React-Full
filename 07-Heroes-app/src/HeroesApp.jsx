import { useReducer } from "react";
import { AuthContext } from "./Auth/authContext";
import { authReducer } from "./Auth/authReducer";
import { AppRouter } from "./Routes/AppRouter";

const init = () => {
   return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
   const [user, dispatch] = useReducer(authReducer, {}, init);

   return (
      <AuthContext.Provider value={{ user, dispatch }}>
         <AppRouter />
      </AuthContext.Provider>
   );
};
