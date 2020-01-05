import React from 'react';
import { mount } from 'enzyme';

import { updateInputValue } from '../utils';
import PaceToSpeedConverter from '../../components/PaceToSpeedConverter/PaceToSpeedConverter';
import Summary from '../../components/Summary/Summary';
import TimePicker from '../../components/TimePicker/TimePicker';

describe('PaceToSpeedConverter', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PaceToSpeedConverter />);
  });

  test.each([
    [[6, 0], '10 km/h'],
    [[5, 0], '12 km/h'],
    [[5, 30], '10.91 km/h'],
    [[4, 45], '12.63 km/h'],
    [[6, 15], '9.6 km/h'],
    [[0, 15], '240 km/h'],
    [[0, 0], '0 km/h']
  ])(
    'should display calculated speed',
    ([paceMinutes, paceSeconds], expected) => {
      const paceInput = wrapper.find(TimePicker);

      updateInputValue(paceInput, 'minutes', paceMinutes);
      updateInputValue(paceInput, 'seconds', paceSeconds);

      expect(
        wrapper
          .find(Summary)
          .text()
          .endsWith(expected)
      ).toBeTruthy();
    }
  );
});
