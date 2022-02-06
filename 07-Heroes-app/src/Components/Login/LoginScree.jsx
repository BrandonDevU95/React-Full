import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/authContext";
import { types } from "../../Types/types";

export const LoginScreen = () => {
   const navigate = useNavigate();
   //El dispatch se toma del contexto
   const { dispatch } = useContext(AuthContext);

   const handleLogin = () => {
      const actions = {
         type: types.login,
         payload: {
            name: "Brandon U",
         },
      };

      dispatch(actions);

      const lastPath = localStorage.getItem("lastPath") || "/";

      navigate(lastPath, { replace: true });
   };

   return (
      <div className="container mt-5 ">
         <h1>LoginScreen</h1>
         <hr />
         <button className="btn btn-primary" onClick={handleLogin}>
            Login
         </button>
      </div>
   );
};
