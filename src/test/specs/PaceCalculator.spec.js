import React from 'react';
import { mount } from 'enzyme';
import Chip from '@material-ui/core/Chip';

import { updateInputValue, findElementByText } from '../utils';
import DistancePicker from '../../components/DistancePicker/DistancePicker';
import Summary from '../../components/Summary/Summary';
import PaceCalculator from '../../components/PaceCalculator/PaceCalculator';
import DistanceTable from '../../components/DistanceTable/DistanceTable';
import TimePicker from '../../components/TimePicker/TimePicker';

describe('PaceCalculator', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PaceCalculator />);
  });

  test.each([
    [[0, 6, 0], 1000, ['10.00 km/h', '06:00 min/km'], ['00:06:00']],
    [
      [0, 32, 0],
      '5 km',
      ['9.38 km/h', '06:24 min/km'],
      ['00:06:24', '00:12:48', '00:19:12', '00:25:36', '00:32:00']
    ],

    [
      [0, 48, 0],
      10000,
      ['12.50 km/h', '04:48 min/km'],
      [
        '00:04:48',
        '00:09:36',
        '00:14:24',
        '00:19:12',
        '00:24:00',
        '00:28:48',
        '00:33:36',
        '00:38:24',
        '00:43:12',
        '00:48:00'
      ]
    ],

    [
      [1, 50, 0],
      21097,
      ['11.51 km/h', '05:12 min/km'],
      [
        '00:05:12',
        '00:10:24',
        '00:15:36',
        '00:20:48',
        '00:26:00',
        '00:31:12',
        '00:36:24',
        '00:41:36',
        '00:46:48',
        '00:52:00',
        '00:57:12',
        '01:02:24',
        '01:07:36',
        '01:12:48',
        '01:18:00',
        '01:23:12',
        '01:28:24',
        '01:33:36',
        '01:38:48',
        '01:44:00',
        '01:49:12',
        '01:49:42'
      ]
    ]
  ])(
    'should display calculated pace',
    (
      [timeHours, timeMinutes, timeSeconds],
      distance,
      [expectedSpeed, expectedPace],
      expectedRows
    ) => {
      const paceInput = wrapper.find(TimePicker);

      updateInputValue(paceInput, 'hours', timeHours);
      updateInputValue(paceInput, 'minutes', timeMinutes);
      updateInputValue(paceInput, 'seconds', timeSeconds);

      if (typeof distance === 'string') {
        findElementByText(wrapper.find(Chip), distance).simulate('click');
      } else {
        updateInputValue(wrapper.find(DistancePicker), 'distance', distance);
      }

      expect(wrapper.find(Summary).contains(expectedSpeed)).toBeTruthy();
      expect(wrapper.find(Summary).contains(expectedPace)).toBeTruthy();

      wrapper
        .find(DistanceTable)
        .find('tbody tr')
        .forEach((node, index) => {
          expect(node.text().endsWith(expectedRows[index])).toBeTruthy();
        });
    }
  );
});
