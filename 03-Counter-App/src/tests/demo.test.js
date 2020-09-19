// test('should be true', () => {
// 	const isAvtive = true;
// });

describe('Pruebas en el archivo demo ', () => {
	test('Deben ser iguales los strings', () => {
		const mensaje = 'Hola Mundo';

		const mensaje2 = `Hola Mundo`;

		expect(mensaje).toBe(mensaje2);
	});
});
