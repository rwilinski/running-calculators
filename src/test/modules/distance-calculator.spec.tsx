import { render, screen } from '@testing-library/react';

import { DistanceCalculator } from '../../app/modules/distance-calculator.module';
import { clearAndType, getSpinInputElements } from '../tools';

test('DistanceCalculator', () => {
  render(<DistanceCalculator />);

  const { input: paceMinutes } = getSpinInputElements(0);
  const { input: paceSeconds } = getSpinInputElements(1);

  const { input: timeHours } = getSpinInputElements(2);
  const { input: timeMinutes } = getSpinInputElements(3);
  const { input: timeSeconds } = getSpinInputElements(4);

  expect(paceMinutes).toHaveValue(6);
  expect(paceSeconds).toHaveValue(0);
  expect(timeHours).toHaveValue(0);
  expect(timeMinutes).toHaveValue(30);
  expect(timeSeconds).toHaveValue(0);

  expect(screen.getByText('5 km')).toBeInTheDocument();

  clearAndType(paceMinutes, 5);
  clearAndType(paceSeconds, 0);
  clearAndType(timeHours, 0);
  clearAndType(timeMinutes, 45);
  clearAndType(timeSeconds, 0);

  expect(screen.getByText('9 km')).toBeInTheDocument();

  clearAndType(paceMinutes, 5);
  clearAndType(paceSeconds, 50);
  clearAndType(timeHours, 1);
  clearAndType(timeMinutes, 50);
  clearAndType(timeSeconds, 0);

  expect(screen.getByText('18 km 857 m')).toBeInTheDocument();

  clearAndType(paceMinutes, 4);
  clearAndType(paceSeconds, 30);
  clearAndType(timeHours, 1);
  clearAndType(timeMinutes, 45);
  clearAndType(timeSeconds, 30);

  expect(screen.getByText('23 km 444 m')).toBeInTheDocument();
});
