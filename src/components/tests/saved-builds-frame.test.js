import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsFrame from '../saved-builds-frame';

describe('<SavedBuildsFrame />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsFrame />);
    });
});