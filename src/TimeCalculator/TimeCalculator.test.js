import React from 'react';
import ReactDOM from 'react-dom';
import TimeCalculator from './TimeCalculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TimeCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
