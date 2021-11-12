import { render, screen } from '@testing-library/react';

import { Summary } from '../../app/shared/summary.component';
import { SummaryItem } from '../../app/shared/summary-item.component';

describe('Summary', () => {
  test('should render elements', () => {
    render(
      <Summary>
        <SummaryItem label="Test label 1">Test value 1</SummaryItem>
        <SummaryItem label="Test label 2">Test value 2</SummaryItem>
      </Summary>
    );

    expect(screen.getByText('Test label 1')).toBeInTheDocument();
    expect(screen.getByText('Test value 1')).toBeInTheDocument();

    expect(screen.getByText('Test label 2')).toBeInTheDocument();
    expect(screen.getByText('Test value 2')).toBeInTheDocument();
  });
});
