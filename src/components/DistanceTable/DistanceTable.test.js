import React from 'react';
import ReactDOM from 'react-dom';
import DistanceTable from './DistanceTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DistanceTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});
