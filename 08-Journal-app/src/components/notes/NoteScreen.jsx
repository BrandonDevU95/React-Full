import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
   return (
      <div className="notes__main-content">
         <NotesAppBar />
         <div className="notes__content">
            <form className="notes__main-content">
               <input
                  type="text"
                  placeholder="Some awesome title"
                  className="notes__title-input"
                  autoComplete="off"
               />
               <textarea
                  placeholder="What happened today?"
                  className="notes__textarea"
               />

               <div className="notes__images">
                  <img
                     src="https://i.picsum.photos/id/278/400/400.jpg?hmac=t2xECpUJ_9FfDdsDq-JUjo6swqIRTPO7jd4sRmZSmDE"
                     alt="Someone"
                  />
               </div>
            </form>
         </div>
      </div>
   );
};
