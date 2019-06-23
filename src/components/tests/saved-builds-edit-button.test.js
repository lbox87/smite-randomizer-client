import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsEditButton from '../saved-builds-edit-button';

describe('<SavedBuildsEditButton />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsEditButton />);
    });
});