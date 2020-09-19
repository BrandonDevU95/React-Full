import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Prueba en 02-template-string ', () => {
	test('getSaludo debe retornar hola fernando', () => {
		const nombre = 'Carlos';

		const saludo = getSaludo(nombre);

		expect(saludo).toBe('Hola ' + nombre);
	});

	test('getSaludo debe retornar hola carlos si no hay nombre', () => {
		const saludo = getSaludo();

		expect(saludo).toBe('Hola Carlos');
	});
});
