import React from 'react';
import { mount } from 'enzyme';

import { updateInputValue } from '../utils';
import SpeedToPaceConverter from '../../components/SpeedToPaceConverter/SpeedToPaceConverter';
import Summary from '../../components/Summary/Summary';
import SpeedPicker from '../../components/SpeedPicker/SpeedPicker';

describe('SpeedToPaceConverter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<SpeedToPaceConverter />);
  });

  test.each([
    [10, '06:00 min/km'],
    [12, '05:00 min/km'],
    [20, '03:00 min/km'],
    [12.3, '04:53 min/km'],
    [12.34, '04:52 min/km'],
    [15.5, '03:52 min/km'],
    [1, '01:00:00 min/km'],
    [0, '00:00 min/km']
  ])('should display calculated pace', (speed, expected) => {
    const paceInput = wrapper.find(SpeedPicker);

    updateInputValue(paceInput, 'speed', speed);

    expect(
      wrapper
        .find(Summary)
        .text()
        .endsWith(expected)
    ).toBeTruthy();
  });
});
