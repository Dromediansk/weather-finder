import { shallow } from 'enzyme';
import React from 'react';
import Form from '../components/Form';

it('expect to render Form component', () => {
	expect(shallow(<Form />)).toMatchSnapshot();
})