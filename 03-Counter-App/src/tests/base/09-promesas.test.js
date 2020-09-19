import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con promesas ', () => {
	test('getHeroeByIdAsync debe retornar un heroe asincrono ', (done) => {
		const id = 1;

		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[0]);
			done();
		});
	});

	//Done lo utilizamos para hacer test async para indicarle a jest que debe esperar.

	test('Debe obtener un error si el id no existe ', (done) => {
		const id = 10;
		getHeroeByIdAsync(id).catch((error) => {
			expect(error).toBe('No se pudo encontrar el héroe');
			done();
		});
	});
});
