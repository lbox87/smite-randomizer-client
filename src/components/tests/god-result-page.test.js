import React from 'react';
import {shallow, mount} from 'enzyme';

import GodResultPage from '../god-result-page';

describe('<GodResultPage /> tests', () => {
    it('Renders without crashing', () => {
        shallow(<GodResultPage />);
    });

    it('Renders page without items initially', () => {
        const wrapper = shallow(<GodResultPage />);
        expect(wrapper.hasClass('without-items')).toEqual(true);
    });

    it('Should switch to page with items when items given', () => {
        const wrapper = shallow(<GodResultPage />);
        wrapper.setState({ item1: 'thing' })
        expect(wrapper.hasClass('with-items')).toEqual(true);
    });    
});