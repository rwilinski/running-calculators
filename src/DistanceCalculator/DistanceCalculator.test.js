import React from 'react';
import ReactDOM from 'react-dom';
import DistanceCalculator from './DistanceCalculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DistanceCalculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});
