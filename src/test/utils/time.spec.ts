import { secondsToTime, timeToSeconds } from '../../app/utils/time.util';

describe('time utils', () => {
  type SecondsToTimeType = [number, any][];

  const cases: SecondsToTimeType = [
    [1, { hours: 0, minutes: 0, seconds: 1 }],
    [123, { hours: 0, minutes: 2, seconds: 3 }],
    [12345, { hours: 3, minutes: 25, seconds: 45 }],
    [3599, { hours: 0, minutes: 59, seconds: 59 }],
    [3600, { hours: 1, minutes: 0, seconds: 0 }],
    [3601, { hours: 1, minutes: 0, seconds: 1 }],
  ];

  test('secondsToTime function', () => {
    cases.forEach((value) => {
      expect(secondsToTime(value[0])).toEqual(value[1]);
    });
  });

  test('timeToSeconds function', () => {
    cases.forEach((value) => {
      expect(timeToSeconds(value[1])).toEqual(value[0]);
    });
  });
});
