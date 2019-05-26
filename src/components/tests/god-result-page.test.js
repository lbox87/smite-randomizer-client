import React from 'react';
import {shallow, mount} from 'enzyme';

import GodResultPage from '../god-result-page';

describe('<GodResultPage />', () => {
    it('Renders without crashing', () => {
        shallow(<GodResultPage />);
    });
});