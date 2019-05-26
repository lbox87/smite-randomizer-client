import React from 'react';
import {shallow, mount} from 'enzyme';

import RandomizeGodForm from '../randomize-god-form';

describe('<RandomizeGodForm />', () => {
    it('Renders without crashing', () => {
        shallow(<RandomizeGodForm />);
    });
});