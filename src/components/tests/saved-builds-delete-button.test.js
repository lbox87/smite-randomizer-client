import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsDeleteButton from '../saved-builds-delete-button';

describe('<SavedBuildsDeleteButton />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsDeleteButton />);
    });
});