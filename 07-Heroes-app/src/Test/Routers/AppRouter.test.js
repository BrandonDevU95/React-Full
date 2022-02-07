import { AppRouter } from "../../Routes/AppRouter";
import { AuthContext } from "../../Auth/authContext";
import { mount } from "enzyme";

describe("Pruebas en AppRouter", () => {
   const contextValue = {
      user: {
         logged: false,
      },
   };

   test("debe de mostrar login si no esta autenticado", () => {
      const wrapper = mount(
         <AuthContext.Provider value={contextValue}>
            <AppRouter />
         </AuthContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find("h1").text().trim()).toBe("LoginScreen");
   });
});
