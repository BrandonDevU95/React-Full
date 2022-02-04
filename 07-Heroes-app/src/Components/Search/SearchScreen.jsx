import { useForm } from "../../Hooks/useForm";

export const SearchScreen = () => {
   const [formValues, handleInputChange] = useForm({
      searchText: "",
   });

   const { searchText } = formValues;

   const handleSearch = (e) => {
      e.preventDefault();
      console.log(searchText);
   };

   return (
      <>
         <h1>Busquedas</h1>
         <hr />
         <div className="row ">
            <div className="col-5">
               <h4>Formulario</h4>
               <hr />
               <form onSubmit={handleSearch}>
                  <input
                     type="text"
                     placeholder="Buscar heroe"
                     className="form-control"
                     name="searchtext"
                     autoComplete="off"
                     value={searchText}
                     onChange={handleInputChange}
                  />
                  <button
                     type="submit"
                     className="btn btn-outline-primary mt-1 btn-block"
                  >
                     Buscar...
                  </button>
               </form>
            </div>
         </div>
      </>
   );
};
