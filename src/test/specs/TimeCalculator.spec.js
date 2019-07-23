import React from 'react';
import { mount } from 'enzyme';
import Chip from '@material-ui/core/Chip';

import { updateInputValue, findElementByText } from '../utils';
import DistancePicker from '../../components/DistancePicker/DistancePicker';
import Summary from '../../components/Summary/Summary';
import TimeCalculator from '../../components/TimeCalculator/TimeCalculator';
import TimePicker from '../../components/TimePicker/TimePicker';

describe('TimeCalculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<TimeCalculator />);
  });

  test.each([
    [[6, 0], 1000, '00:06:00'],
    [[6, 0], 4000, '00:24:00'],
    [[6, 30], 10000, '01:05:00'],
    [[5, 10], 21097, '01:49:00'],
    [[5, 0], 21097, '01:45:29'],
    [[4, 30], 5000, '00:22:30'],
    [[6, 0], '1 km', '00:06:00'],
    [[5, 0], '1 km', '00:05:00'],
    [[5, 15], '2 km', '00:10:30'],
    [[5, 15], '10 km', '00:52:30'],
    [[5, 15], 'Halfmarathon', '01:50:46'],
    [[5, 15], 'Marathon', '03:41:31'],
    [[0, 0], 0, '00:00:00'],
    [[1, 1], 0, '00:00:00']
  ])(
    'should display calculated time',
    ([paceMinutes, paceSeconds], distance, expected) => {
      const paceInput = wrapper.find(TimePicker);

      updateInputValue(paceInput, 'minutes', paceMinutes);
      updateInputValue(paceInput, 'seconds', paceSeconds);

      if (typeof distance === 'string') {
        findElementByText(wrapper.find(Chip), distance).simulate('click');
      } else {
        updateInputValue(wrapper.find(DistancePicker), 'distance', distance);
      }

      expect(
        wrapper
          .find(Summary)
          .text()
          .endsWith(expected)
      ).toBeTruthy();
    }
  );
});
