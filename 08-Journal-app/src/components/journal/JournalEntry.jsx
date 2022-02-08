import React from "react";

export const JournalEntry = () => {
   return (
      <div className="journal__entry pointer">
         <div
            className="journal__entry-picture"
            style={{
               backgroundImage:
                  "url(https://i.picsum.photos/id/235/75/75.jpg?hmac=rqB86guBofgcjsWu__sasugQYLG80TiyrTJ0pFs8nZI)",
               backgroundSize: "cover",
            }}
         ></div>
         <div className="journal__entry-body">
            <p className="journal__entry-title">Un nuevo dia</p>
            <p className="journal__entry-content">
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
         </div>
         <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
         </div>
      </div>
   );
};
