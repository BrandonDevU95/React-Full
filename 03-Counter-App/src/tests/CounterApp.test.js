import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en el CounterApp', () => {
	test('Debe mostrar el CounterApp corectamente  ', () => {
		const wrapper = shallow(<CounterApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar por defecto el valor de 100 ', () => {
		const wrapper = shallow(<CounterApp value={100} />);
		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('100');
	});
});
