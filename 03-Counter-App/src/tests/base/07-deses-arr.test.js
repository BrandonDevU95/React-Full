import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en el archivo 07-deses-arr ', () => {
	test('Debe de retornar un string y un numero ', () => {
		const arr = retornaArreglo();

		expect(arr).toEqual(['ABC', 123]);
	});
});
