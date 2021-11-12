import { render } from '@testing-library/react';

import { DistanceTable } from '../../app/shared/distance-table.component';

import { getDistanceTableElement } from '../tools';

describe('DistanceTable', () => {
  test('should render table for 5k', () => {
    render(<DistanceTable time={1800} distance={5000} />);

    const { rows, cellsText } = getDistanceTableElement();

    expect(rows).toHaveLength(5);
    expect(cellsText).toEqual([
      ['1 km', '00:06:00'],
      ['2 km', '00:12:00'],
      ['3 km', '00:18:00'],
      ['4 km', '00:24:00'],
      ['5 km (Finish)', '00:30:00'],
    ]);
  });

  test('should render table for halfmarathon', () => {
    render(<DistanceTable time={7200} distance={21097} />);

    const { rows, cellsText } = getDistanceTableElement();

    expect(rows).toHaveLength(22);
    expect(cellsText[0]).toEqual(['1 km', '00:05:41']);
    expect(cellsText[21]).toEqual(['21 km 97 m (Finish)', '01:59:54']);
  });

  test('should render empty table', () => {
    render(<DistanceTable time={0} distance={0} />);

    const { rows } = getDistanceTableElement();

    expect(rows).toHaveLength(0);
  });
});
