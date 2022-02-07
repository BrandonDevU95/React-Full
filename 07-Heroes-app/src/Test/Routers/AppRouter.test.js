import { AppRouter } from "../../Routes/AppRouter";
import { AuthContext } from "../../Auth/authContext";
import { mount } from "enzyme";

describe("Pruebas en AppRouter", () => {
   test("debe de mostrar login si no esta autenticado", () => {
      const contextValue = {
         user: {
            logged: false,
         },
      };

      const wrapper = mount(
         <AuthContext.Provider value={contextValue}>
            <AppRouter />
         </AuthContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find("h1").text().trim()).toBe("LoginScreen");
   });

   test("debe de mostrar el componente de marvel si esta autenticado", () => {
      const contextValue = {
         user: {
            logged: true,
            name: "Juan",
         },
      };

      const wrapper = mount(
         <AuthContext.Provider value={contextValue}>
            <AppRouter />
         </AuthContext.Provider>
      );

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(".navbar").exists()).toBe(true);
   });
});
