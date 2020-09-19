import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Pruebas en el CounterApp', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<CounterApp />);
	});
	test('Debe mostrar el CounterApp corectamente  ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe mostrar por defecto el valor de 100 ', () => {
		const wrapper = shallow(<CounterApp value={100} />);
		const counterText = wrapper.find('h2').text().trim();

		expect(counterText).toBe('100');
	});

	test('Debe incrementar en el boton de mas ', () => {
		wrapper.find('button').at(0).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('11');
	});

	test('Debe incrementar en el boton de mas ', () => {
		wrapper.find('button').at(2).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('9');
	});

	test('Debe reiniciar en el contador ', () => {
		const wrapper = shallow(<CounterApp value={105} />);
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');
		const counterText = wrapper.find('h2').text().trim();
		expect(counterText).toBe('105');
	});
});
