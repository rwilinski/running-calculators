import { render, screen } from '@testing-library/react';

import { PaceToSpeedConverter } from '../../app/modules/pace-to-speed-converter.module';
import { clearAndType, getSpinInputElements } from '../tools';

test('PaceToSpeedConverter', () => {
  render(<PaceToSpeedConverter />);

  const { input: minutes } = getSpinInputElements(0);
  const { input: seconds } = getSpinInputElements(1);

  expect(minutes).toHaveValue(6);
  expect(seconds).toHaveValue(0);

  expect(screen.getByText('10 km/h')).toBeInTheDocument();

  clearAndType(minutes, 6);
  clearAndType(seconds, 10);

  expect(screen.getByText('9.73 km/h')).toBeInTheDocument();

  clearAndType(minutes, 5);
  clearAndType(seconds, 45);

  expect(screen.getByText('10.43 km/h')).toBeInTheDocument();

  clearAndType(minutes, 3);
  clearAndType(seconds, 30);

  expect(screen.getByText('17.14 km/h')).toBeInTheDocument();
});
