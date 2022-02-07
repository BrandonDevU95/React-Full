import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../Auth/authContext";
import { DashboarRouters } from "../../Routes/DashboardRoutes";

describe("Pruebas en DashboarRouters", () => {
   const contextValue = {
      user: {
         logged: true,
         name: "Juan",
      },
   };

   test("debe de mostrarse correctamente", () => {
      const wrapper = mount(
         <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
               <DashboarRouters />
            </MemoryRouter>
         </AuthContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(".text-info").text().trim()).toBe("Juan");
   });
});
