import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsDelete from '../saved-builds-delete';

describe('<SavedBuildsDelete />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsDelete />);
    });
});