import React from 'react';
import ReactDOM from 'react-dom';
import PaceCalculator from './PaceCalculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PaceCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
