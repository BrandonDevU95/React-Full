const { getImagen } = require('../../base/11-async-await');

describe('Pruebas con Async-Await y Fetch ', () => {
	test('Debe de retornar el url de la imagen ', async () => {
		const url = await getImagen();
		expect(url.includes('https://')).toBe(true);
	});
});
