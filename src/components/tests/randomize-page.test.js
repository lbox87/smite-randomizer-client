import React from 'react';
import {shallow, mount} from 'enzyme';

import RandomizePage from '../randomize-page';

describe('<RandomizePage />', () => {
    it('Renders without crashing', () => {
        shallow(<RandomizePage />);
    });
});