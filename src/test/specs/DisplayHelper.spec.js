import {
  pad,
  roundNumber,
  displayTime,
  displayDistance,
  displaySpeed
} from '../../helpers/DisplayHelper/DisplayHelper';

describe('DisplayHelper', () => {
  test('pad function', () => {
    expect(pad()).toBe('00');
    expect(pad(1)).toBe('01');
    expect(pad(12)).toBe('12');
    expect(pad(123)).toBe('123');
    expect(pad(1, 3)).toBe('001');
    expect(pad(1, 5)).toBe('00001');
    expect(pad(123, 5)).toBe('00123');
    expect(pad(123456, 5)).toBe('123456');
  });

  test('roundNumber function', () => {
    expect(roundNumber()).toBe(NaN);
    expect(roundNumber(1)).toBe(1);
    expect(roundNumber(1.2)).toBe(1.2);
    expect(roundNumber(1.23)).toBe(1.23);
    expect(roundNumber(1.234)).toBe(1.23);
    expect(roundNumber(1.235)).toBe(1.24);
  });

  test('displayTime function', () => {
    expect(
      displayTime({
        hours: 0,
        minutes: 5,
        seconds: 30
      })
    ).toBe('00:05:30');

    expect(
      displayTime({
        hours: 1,
        minutes: 45,
        seconds: 5
      })
    ).toBe('01:45:05');

    expect(
      displayTime(
        {
          hours: 0,
          minutes: 5,
          seconds: 30
        },
        true
      )
    ).toBe('05:30');

    expect(
      displayTime(
        {
          hours: 1,
          minutes: 45,
          seconds: 5
        },
        true
      )
    ).toBe('01:45:05');

    expect(displayTime(123)).toBe('00:02:03');
    expect(displayTime(123, true)).toBe('02:03');
    expect(displayTime(12345)).toBe('03:25:45');
    expect(displayTime(12345, true)).toBe('03:25:45');
  });

  test('displayDistance function', () => {
    expect(displayDistance()).toBe('0 m');
    expect(displayDistance(0.5)).toBe('0 m');
    expect(displayDistance(1)).toBe('1 m');
    expect(displayDistance(1.9)).toBe('1 m');
    expect(displayDistance(123)).toBe('123 m');
    expect(displayDistance(1234)).toBe('1 km 234 m');
    expect(displayDistance(2000)).toBe('2 km');
    expect(displayDistance(23456)).toBe('23 km 456 m');
  });

  test('displaySpeed function', () => {
    expect(displaySpeed()).toBe('0 km/h');
    expect(displaySpeed(1)).toBe('1 km/h');
    expect(displaySpeed(1.234)).toBe('1.23 km/h');
  });
});
