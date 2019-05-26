import React from 'react';
import {shallow, mount} from 'enzyme';

import SavedBuildsEdit from '../saved-builds-edit';

describe('<SavedBuildsEdit />', () => {
    it('Renders without crashing', () => {
        shallow(<SavedBuildsEdit />);
    });
});