import { NothigSelected } from "./NothigSelected";
import { Sidebar } from "./Sidebar";

export const JournalScreen = () => {
   return (
      <div className="journal__main-content">
         <Sidebar />
         <main>
            <NothigSelected />
         </main>
      </div>
   );
};
