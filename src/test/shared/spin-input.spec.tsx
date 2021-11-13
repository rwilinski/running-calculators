import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SpinInput } from '../../app/shared/spin-input.component';
import { clearAndType, getSpinInputElements } from '../tools';

describe('SpinInput', () => {
  test('should render elements', () => {
    render(<SpinInput value={1} onChange={jest.fn()} />);

    const { input, upButton, downButton } = getSpinInputElements(0);

    expect(input).toHaveValue(1);
    expect(upButton).toBeInTheDocument();
    expect(upButton).toBeEnabled();
    expect(downButton).toBeInTheDocument();
    expect(downButton).toBeEnabled();
  });

  test('should update value', () => {
    render(<SpinInput value={1} onChange={jest.fn()} max={3} />);

    const { input, upButton, downButton } = getSpinInputElements(0);

    expect(input).toHaveValue(1);

    userEvent.click(upButton);
    userEvent.click(upButton);

    expect(input).toHaveValue(3);

    userEvent.click(upButton);

    expect(input).toHaveValue(0);

    userEvent.click(downButton);

    expect(input).toHaveValue(3);

    clearAndType(input, -1);

    expect(input).toHaveValue(0);

    clearAndType(input, 10);

    expect(input).toHaveValue(3);
  });

  test('should call onChange', () => {
    const onChangeSpy = jest.fn();

    render(<SpinInput value={1} onChange={onChangeSpy} />);

    const { input, upButton } = getSpinInputElements(0);

    clearAndType(input, 3);

    expect(onChangeSpy).toHaveBeenCalledWith(3);

    userEvent.click(upButton);

    expect(onChangeSpy).toHaveBeenCalledWith(4);
  });

  test('should disable down button', () => {
    render(<SpinInput value={1} onChange={jest.fn()} downDisabled={true} />);

    const { input, downButton } = getSpinInputElements(0);

    expect(downButton).toBeDisabled();

    clearAndType(input, 3);
    clearAndType(input, 0);

    expect(downButton).toBeDisabled();
  });

  test('should change factor', () => {
    render(<SpinInput value={1} onChange={jest.fn()} factor={0.5} />);

    const { input, upButton, downButton } = getSpinInputElements(0);

    expect(input).toHaveValue(1);

    userEvent.click(upButton);
    userEvent.click(upButton);

    expect(input).toHaveValue(2);

    userEvent.click(downButton);

    expect(input).toHaveValue(1.5);
  });
});
