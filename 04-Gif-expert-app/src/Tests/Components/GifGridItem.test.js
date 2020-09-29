import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../Components/GifGridItem';

describe('Pruebas de GifGridItem', () => {
	test('Debe mostrar el componente correctamente', () => {
		const wrapper = shallow(<GifGridItem />);

		expect(wrapper).toMatchSnapshot();
	});
});
