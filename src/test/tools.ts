import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const getSpinInputElements = (index = 0) => {
  const element = screen.getAllByTestId('spin-input')[index];

  return {
    upButton: within(element).getByTestId('spin-input-up-button'),
    input: within(element).getByTestId('spin-input-input'),
    downButton: within(element).getByTestId('spin-input-down-button'),
  };
};

export const getDistanceElements = (index = 0) => {
  const element = screen.getAllByTestId('distance-picker')[index];

  return {
    input: within(element).getByTestId('distance-picker-input'),
    chips: within(element).getAllByTestId('distance-picker-chip'),
  };
};

export const getDistanceTableElement = () => {
  const table = screen.getByRole('table');
  const rows = table.querySelectorAll('tbody tr');

  return {
    table,
    rows,
    cellsText: [...rows].map((tr) =>
      [...tr.querySelectorAll('td')].map((td) => td.textContent)
    ),
  };
};

export const clearAndType = (element: Element, value: string | number) => {
  userEvent.clear(element);
  userEvent.type(element, String(value));
};
