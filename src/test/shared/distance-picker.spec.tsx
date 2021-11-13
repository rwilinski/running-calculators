import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { DistancePicker } from '../../app/shared/distance-picker.component';
import { clearAndType, getDistanceElements } from '../tools';

describe('DistancePicker', () => {
  test('should render elements', () => {
    render(<DistancePicker value={1000} onChange={jest.fn()} />);

    const { input, chips } = getDistanceElements();

    expect(input).toHaveValue(1000);
    expect(chips).toHaveLength(6);
  });

  test('should change value by clicking on chip', () => {
    render(<DistancePicker value={1000} onChange={jest.fn()} />);

    const { input } = getDistanceElements();

    expect(input).toHaveValue(1000);

    userEvent.click(screen.getByText('2 km'));

    expect(input).toHaveValue(2000);

    userEvent.click(screen.getByText('Halfmarathon'));

    expect(input).toHaveValue(21097);
  });

  test('should call onChange', () => {
    const onChangeSpy = jest.fn();

    render(<DistancePicker value={1000} onChange={onChangeSpy} />);

    const { input, chips } = getDistanceElements();

    clearAndType(input, 5000);

    expect(onChangeSpy).toHaveBeenCalledWith(5000);

    userEvent.click(chips[5]);

    expect(onChangeSpy).toHaveBeenCalledWith(42195);
  });
});
