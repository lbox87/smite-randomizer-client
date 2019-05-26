import React from 'react';
import {shallow, mount} from 'enzyme';

import SaveEditButton from '../save-edit-button';

describe('<SaveEditButton />', () => {
    it('Renders without crashing', () => {
        shallow(<SaveEditButton />);
    });
});