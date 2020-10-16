import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HooksApp';

describe('Pruebas de HookApp', () => {
	test('Debe mostrarse correctamente', () => {
		const wrapper = shallow(<HookApp />);
		expect(wrapper).toMatchSnapshot();
	});
});
