import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsPage from '../saved-builds-page';

describe('<SavedBuildsPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsPage />);
    });
});