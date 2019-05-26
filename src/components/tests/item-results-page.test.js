import React from 'react';
import {shallow, mount} from 'enzyme';

import ItemResultsPage from '../item-results-page';

describe('<ItemResultsPage />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemResultsPage />);
    });

    it('Renders page without login initially', () => {
        const wrapper = shallow(<ItemResultsPage />);
        wrapper.setProps({ currentUser: 'thing' })
        wrapper.setState({ saved: 'thing' })
        expect(wrapper.hasClass('saved-build')).toEqual(true);
    });

    // it('Should switch to page with items when items given', () => {
    //     const wrapper = shallow(<ItemResultsPage />);
    //     wrapper.setState({ item1: 'thing' })
    //     expect(wrapper.hasClass('with-items')).toEqual(true);
    // });   
});