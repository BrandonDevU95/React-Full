import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {
	// test('Debe mostrar mensaje de saludo', () => {
	// 	const saludo = 'Hola soy Goku';
	// 	const { getByText } = render(<PrimeraApp saludo={saludo} />);

	// 	expect(getByText(saludo)).toBeInTheDocument();
	// });

	test('Debe de mostrar PrimeraApp correctamente', () => {
		const saludo = 'Hola Soy Goku';
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});
});
