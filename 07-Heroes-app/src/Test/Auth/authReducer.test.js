import { authReducer } from "../../Auth/authReducer";
import { types } from "../../Types/types";

describe("Pruebas en authReducer", () => {
   test("debe de retornar el estado por defecto", () => {
      const state = authReducer({ logged: false }, {});
      expect(state).toEqual({ logged: false });
   });

   test('Debe de autenticar y colocar el "name" el usuario', () => {
      const action = {
         type: types.login,
         payload: {
            name: "Juan",
         },
      };

      const state = authReducer({ logged: false }, action);
      expect(state).toEqual({
         logged: true,
         name: "Juan",
      });
   });

   test('Debe de borrar el "name" del usuario y logged en false', () => {
      const action = {
         type: types.logout,
      };

      const state = authReducer({ logged: true, name: "Juan" }, action);
      expect(state).toEqual({
         logged: false,
      });
   });
});
