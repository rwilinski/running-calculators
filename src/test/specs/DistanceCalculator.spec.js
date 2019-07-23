import React from 'react';
import { mount } from 'enzyme';

import { updateInputValue } from '../utils';
import DistanceCalculator from '../../components/DistanceCalculator/DistanceCalculator';
import Summary from '../../components/Summary/Summary';
import TimePicker from '../../components/TimePicker/TimePicker';

describe('DistanceCalculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<DistanceCalculator />);
  });

  test.each([
    [[6, 0], [0, 30, 0], '5 km'],
    [[5, 30], [0, 30, 0], '5 km 454 m'],
    [[5, 0], [0, 30, 0], '6 km'],
    [[4, 30], [1, 0, 0], '13 km 333 m'],
    [[4, 30], [0, 45, 0], '10 km'],
    [[5, 0], [2, 0, 0], '24 km'],
    [[6, 45], [4, 45, 0], '42 km 222 m'],
    [[5, 15], [1, 2, 3], '11 km 819 m'],
    [[0, 0], [0, 0, 0], '0 m'],
    [[0, 0], [0, 0, 1], '0 m'],
    [[0, 1], [0, 0, 0], '0 m']
  ])(
    'should display calculated distance',
    (
      [paceMinutes, paceSeconds],
      [timeHours, timeMinutes, timeSeconds],
      expected
    ) => {
      const paceInput = wrapper.find(TimePicker).at(0);

      updateInputValue(paceInput, 'minutes', paceMinutes);
      updateInputValue(paceInput, 'seconds', paceSeconds);

      const timeInput = wrapper.find(TimePicker).at(1);

      updateInputValue(timeInput, 'hours', timeHours);
      updateInputValue(timeInput, 'minutes', timeMinutes);
      updateInputValue(timeInput, 'seconds', timeSeconds);

      expect(
        wrapper
          .find(Summary)
          .text()
          .endsWith(expected)
      ).toBeTruthy();
    }
  );
});
