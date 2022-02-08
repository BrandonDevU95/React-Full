import { AuthRouter } from "./AuthRouter";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Redirect,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <Switch>
               <Route path="/auth" component={AuthRouter} />
               <Route path="/" exact component={JournalScreen} />
               <Redirect to="/auth/login" />
            </Switch>
         </div>
      </Router>
   );
};
