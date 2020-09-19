import '@testing-library/jest-dom';

const { getHeroeById, getHeroesByOwner } = require('../../base/08-imp-exp');
const { default: heroes } = require('../../data/heroes');

describe('Pruebas en el archivo 08-imp-exp ', () => {
	test('Debe retornar un heroe  ', () => {
		const id = 1;
		const heroe = getHeroeById(id);

		const heroedata = heroes.find((h) => h.id === id);

		expect(heroe).toEqual(heroedata);
	});

	test('Debe retornar un undefine si heroe no existe  ', () => {
		const id = 10;
		const heroe = getHeroeById(id);

		expect(heroe).toBe(undefined);
	});

	test('Debe retornar un arreglo con los heroes de DC ', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);

		const heroesData = heroes.filter((h) => h.owner === owner);

		expect(heroes).toEqual(heroesData);
	});

	test('Debe de retornar un arreglo con los heroes de marvel ', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(2);
	});
});
