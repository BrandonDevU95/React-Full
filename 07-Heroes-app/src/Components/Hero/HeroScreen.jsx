import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../Selectors/getHeroesById";

export const HeroScreen = () => {
   const { heroeId } = useParams();
   const navigate = useNavigate();

   const hero = getHeroById(heroeId);

   const { id, superhero, alter_ego, characters, first_appearance, publisher } =
      hero;

   if (!hero) return <Navigate to="/" />;

   const imagePath = `/assets/${id}.jpg`;

   const handleReturn = () => {
      //Regresa a la pantalla anterior
      navigate(-1);
   };

   return (
      <div className="row mt-5">
         <div className="col-4">
            <img src={imagePath} alt={superhero} className="img-thumbnail" />
         </div>
         <div className="col-8">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <b>Alter ego:</b> {alter_ego}
               </li>
               <li className="list-group-item">
                  <b>Publisher:</b> {publisher}
               </li>
               <li className="list-group-item">
                  <b>First Appearance:</b> {first_appearance}
               </li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{characters}</p>
            <button className="btn btn-outline-info" onClick={handleReturn}>
               Regresar
            </button>
         </div>
      </div>
   );
};
