import React from 'react';
import {shallow, mount} from 'enzyme';

import EditGodPage from '../edit-god-page';

describe('<EditGodPage />', () => {
    it('Renders without crashing', () => {
        shallow(<EditGodPage />);
    });
});