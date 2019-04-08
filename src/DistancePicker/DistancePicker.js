import React from 'react';

class DistancePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      distance: props.value
    };

    this.onChange = this.onChange.bind(this);
    this.broadcast = this.broadcast.bind(this);
  }

  distances = [
    {
      name: '1km',
      value: 1000
    },
    {
      name: '2km',
      value: 2000
    },
    {
      name: '5km',
      value: 5000
    },
    {
      name: '10km',
      value: 10000
    },
    {
      name: 'Półmaraton',
      value: 21097
    },
    {
      name: 'Maraton',
      value: 42195
    }
  ];

  onChange({ target }) {
    this.setState(
      {
        distance: target.value
      },
      () => {
        this.broadcast();
      }
    );
  }

  broadcast() {
    this.props.onChange(parseInt(this.state.distance || 0));
  }

  render() {
    return (
      <div>
        <input
          type="number"
          name="distance"
          min="0"
          value={this.state.distance}
          onChange={this.onChange}
        />
        <select onChange={this.onChange}>
          {this.distances.map(item => {
            return (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default DistancePicker;
