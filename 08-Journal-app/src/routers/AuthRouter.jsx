import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RegisterScreen } from "../components/auth/RegisterScreen";

export const AuthRouter = () => {
   return (
      <div className="auth__main">
         <div className="auth__box-container">
            <Switch>
               <Route path="/auth/login" exact component={LoginScreen} />
               <Route path="/auth/register" exact component={RegisterScreen} />
               <Redirect to="/auth/login" />
            </Switch>
         </div>
      </div>
   );
};
