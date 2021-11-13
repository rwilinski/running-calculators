import { render, screen } from '@testing-library/react';

import { SpeedToPaceConverter } from '../../app/modules/speed-to-pace-converter.module';
import { clearAndType, getSpinInputElements } from '../tools';

test('SpeedToPaceConverter', () => {
  render(<SpeedToPaceConverter />);

  const { input } = getSpinInputElements(0);

  expect(input).toHaveValue(10);

  expect(screen.getByText('06:00 min/km')).toBeInTheDocument();

  clearAndType(input, 12);

  expect(screen.getByText('05:00 min/km')).toBeInTheDocument();

  clearAndType(input, 13.5);

  expect(screen.getByText('04:27 min/km')).toBeInTheDocument();

  clearAndType(input, 15);

  expect(screen.getByText('04:00 min/km')).toBeInTheDocument();
});
