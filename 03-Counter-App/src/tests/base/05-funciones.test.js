import '@testing-library/jest-dom';
import { getUser } from '../../base/05-funciones';
import { getUsuarioActivo } from '../../base/05-funciones';

describe('Prueba en 05-funciones ', () => {
	test('getUser debe retornar un objeto ', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const user = getUser();

		expect(user).toEqual(userTest);
		//Analiza las propiedades de los objetos para compararlos
	});

	test('getUsuarioActivo debe retornar un objeto ', () => {
		const nombre = 'Juan';
		const user = getUsuarioActivo(nombre);

		expect(user).toEqual({
			uid: 'ABC567',
			username: nombre,
		});
	});
});
