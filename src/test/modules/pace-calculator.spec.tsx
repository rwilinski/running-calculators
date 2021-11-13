import { render, screen } from '@testing-library/react';

import {
  getSpinInputElements,
  getDistanceElements,
  clearAndType,
} from '../tools';
import { PaceCalculator } from '../../app/modules/pace-calculator.module';

test('PaceCalculator', () => {
  render(<PaceCalculator />);

  const { input: hours } = getSpinInputElements(0);
  const { input: minutes } = getSpinInputElements(1);
  const { input: seconds } = getSpinInputElements(2);

  const { input: distanceInput } = getDistanceElements();

  expect(hours).toHaveValue(0);
  expect(minutes).toHaveValue(6);
  expect(seconds).toHaveValue(0);

  expect(screen.getByText('10 km/h')).toBeInTheDocument();
  expect(screen.getByText('06:00 min/km')).toBeInTheDocument();
  expect(screen.getByText('Your target split times:')).toBeInTheDocument();

  clearAndType(minutes, 25);
  clearAndType(seconds, 45);
  clearAndType(distanceInput, 5000);

  expect(screen.getByText('11.65 km/h')).toBeInTheDocument();
  expect(screen.getByText('05:09 min/km')).toBeInTheDocument();

  clearAndType(hours, 1);
  clearAndType(minutes, 50);
  clearAndType(seconds, 0);
  clearAndType(distanceInput, 21097);

  expect(screen.getByText('11.51 km/h')).toBeInTheDocument();
  expect(screen.getByText('05:12 min/km')).toBeInTheDocument();

  clearAndType(hours, 3);
  clearAndType(minutes, 30);
  clearAndType(distanceInput, 42195);

  expect(screen.getByText('12.06 km/h')).toBeInTheDocument();
  expect(screen.getByText('04:58 min/km')).toBeInTheDocument();
});
