import { render, screen } from '@testing-library/react';

import {
  getSpinInputElements,
  getDistanceElements,
  clearAndType,
} from '../tools';
import { TimeCalculator } from '../../app/modules/time-calculator.module';

test('TimeCalculator', () => {
  render(<TimeCalculator />);

  const { input: minutes } = getSpinInputElements(0);
  const { input: seconds } = getSpinInputElements(1);

  const { input: distanceInput } = getDistanceElements();

  expect(minutes).toHaveValue(6);
  expect(seconds).toHaveValue(0);

  expect(screen.getByText('00:06:00')).toBeInTheDocument();

  clearAndType(minutes, 5);
  clearAndType(seconds, 40);
  clearAndType(distanceInput, 2000);

  expect(screen.getByText('00:11:20')).toBeInTheDocument();

  clearAndType(minutes, 4);
  clearAndType(seconds, 50);
  clearAndType(distanceInput, 10000);

  expect(screen.getByText('00:48:20')).toBeInTheDocument();

  clearAndType(minutes, 3);
  clearAndType(seconds, 30);
  clearAndType(distanceInput, 21097);

  expect(screen.getByText('01:13:50')).toBeInTheDocument();
});
