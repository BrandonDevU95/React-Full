import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import React from 'react';
import '@testing-library/jest-dom';

describe('Pruebas en PrimeraApp', () => {
	test('Debe mostrar mensaje de saludo', () => {
		const saludo = 'Hola soy Goku';
		const { getByText } = render(<PrimeraApp saludo={saludo} />);

		expect(getByText(saludo)).toBeInTheDocument();
	});
});
