import React from 'react';
import {shallow, mount} from 'enzyme';

import {ItemResultsPage} from '../item-results-page';

describe('<ItemResultsPage />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemResultsPage />);
    });

    it('Renders page without login', () => {
        const wrapper = shallow(<ItemResultsPage/>);
        expect(wrapper.hasClass('not-logged-in')).toEqual(true);
    });

    it('Renders page with login and build not saved', () => {
        const wrapper = shallow(<ItemResultsPage currentUser='thing'/>);
        expect(wrapper.hasClass('unsaved-build')).toEqual(true);
    });

    // it('Renders page with login and build not saved', () => {
    //     const wrapper = shallow(<ItemResultsPage currentUser='thing'/>);
    //     wrapper.setState({ saved: 'thing' })
    //     expect(wrapper.hasClass('saved-build')).toEqual(true);
    //     console.log(wrapper.debug())
    // });

    // it('Should switch to editing when the add button is clicked', () => {
    //     const wrapper = shallow(<ItemResultsPage currentUser='thing'/>);
    //     wrapper.find('.randomize-gear-button').simulate('Click');
    //     expect(wrapper.state('saved-build')).toEqual(true);
    //             console.log(wrapper.debug())
    // });
});