import {
  pad,
  roundNumber,
  displayTime,
  displayDistance,
  displaySpeed,
  displayPace,
} from '../../app/utils/display.util';

describe('display utils', () => {
  test('pad function', () => {
    type PadType = [number, number, string][];

    const cases: PadType = [
      [1, undefined, '01'],
      [12, undefined, '12'],
      [123, undefined, '123'],
      [1, 3, '001'],
      [1, 5, '00001'],
      [123, 5, '00123'],
      [12345, 3, '12345'],
    ];

    cases.forEach((value) => {
      expect(pad(value[0], value[1])).toEqual(value[2]);
    });
  });

  test('roundNumber function', () => {
    const cases = [
      [undefined, 0],
      [1, 1],
      [1.2, 1.2],
      [1.23, 1.23],
      [1.234, 1.23],
      [1.2345, 1.23],
    ];

    cases.forEach((value) => {
      expect(roundNumber(value[0])).toEqual(value[1]);
    });
  });

  test('displayTime function', () => {
    type DisplayTimeType = [number, boolean, string][];

    const cases: DisplayTimeType = [
      [undefined, undefined, '00:00:00'],
      [undefined, true, '00:00'],
      [123, false, '00:02:03'],
      [1234, false, '00:20:34'],
      [123, true, '02:03'],
      [1234, true, '20:34'],
      [9999, false, '02:46:39'],
      [9999, true, '02:46:39'],
    ];

    cases.forEach((value) => {
      expect(displayTime(value[0], value[1])).toEqual(value[2]);
    });
  });

  test('displayDistance function', () => {
    type DisplayDistanceType = [number, string][];

    const cases: DisplayDistanceType = [
      [undefined, '0 m'],
      [0, '0 m'],
      [1, '1 m'],
      [999, '999 m'],
      [1000, '1 km'],
      [1234, '1 km 234 m'],
      [9999, '9 km 999 m'],
      [123456, '123 km 456 m'],
    ];

    cases.forEach((value) => {
      expect(displayDistance(value[0])).toEqual(value[1]);
    });
  });

  test('displaySpeed function', () => {
    type DisplaySpeedType = [number, string][];

    const cases: DisplaySpeedType = [
      [undefined, '0 km/h'],
      [0, '0 km/h'],
      [1, '1 km/h'],
      [1.001, '1 km/h'],
      [1.234, '1.23 km/h'],
      [1.99, '1.99 km/h'],
    ];

    cases.forEach((value) => {
      expect(displaySpeed(value[0])).toEqual(value[1]);
    });
  });

  test('displayPace function', () => {
    type DisplayPaceType = [number, string][];

    const cases: DisplayPaceType = [
      [undefined, '00:00 min/km'],
      [0, '00:00 min/km'],
      [1, '00:01 min/km'],
      [123, '02:03 min/km'],
      [3599, '59:59 min/km'],
    ];

    cases.forEach((value) => {
      expect(displayPace(value[0])).toEqual(value[1]);
    });
  });
});
