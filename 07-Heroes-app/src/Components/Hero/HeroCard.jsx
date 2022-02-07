import { Link } from "react-router-dom";
import { heroImage } from "../../Helpers/heroImages";

export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters,
}) => {
   return (
      <div className="col">
         <div className="card">
            <div className="row no-gutters">
               <div className="col-md-4">
                  <img
                     src={heroImage(`./${id}.jpg`)}
                     className="card-img"
                     alt={superhero}
                  />
               </div>
               <div className="col-md-8">
                  <div className="card-body">
                     <h5 className="card-title">{superhero}</h5>
                     <p className="card-text">{alter_ego}</p>
                     {alter_ego !== characters && (
                        <p className="text-muted">{characters}</p>
                     )}
                     <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                     </p>
                     <Link to={`/hero/${id}`}>Más...</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
