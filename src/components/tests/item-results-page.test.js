import React from 'react';
import {shallow, mount} from 'enzyme';

import ItemResultsPage from '../item-results-page';

describe('<ItemResultsPage />', () => {
    it('Renders without crashing', () => {
        shallow(<ItemResultsPage />);
    });
});