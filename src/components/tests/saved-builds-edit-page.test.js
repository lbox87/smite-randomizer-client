import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsEditPage from '../saved-builds-edit-page';

describe('<SavedBuildsEditPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsEditPage />);
    });
});