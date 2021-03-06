import {
  secondsToTime,
  timeToSeconds,
  calculateSpeed,
  calculatePace
} from '../../helpers/TimeHelper/TimeHelper';

describe('TimeHelper', () => {
  test('secondsToTime function', () => {
    expect(secondsToTime()).toEqual({ hours: 0, minutes: 0, seconds: 0 });
    expect(secondsToTime(1)).toEqual({ hours: 0, minutes: 0, seconds: 1 });
    expect(secondsToTime(30)).toEqual({ hours: 0, minutes: 0, seconds: 30 });
    expect(secondsToTime(60)).toEqual({ hours: 0, minutes: 1, seconds: 0 });
    expect(secondsToTime(61)).toEqual({ hours: 0, minutes: 1, seconds: 1 });
    expect(secondsToTime(3600)).toEqual({ hours: 1, minutes: 0, seconds: 0 });
    expect(secondsToTime(3601)).toEqual({ hours: 1, minutes: 0, seconds: 1 });
    expect(secondsToTime(4567)).toEqual({ hours: 1, minutes: 16, seconds: 7 });
    expect(secondsToTime(9999)).toEqual({ hours: 2, minutes: 46, seconds: 39 });
  });

  test('timeToSeconds function', () => {
    expect(timeToSeconds()).toBe(0);
    expect(timeToSeconds({})).toBe(0);
    expect(timeToSeconds({ foobar: 2 })).toBe(0);
    expect(timeToSeconds({ hours: NaN })).toBe(0);
    expect(timeToSeconds({ hours: '' })).toBe(0);
    expect(timeToSeconds({ hours: undefined })).toBe(0);
    expect(timeToSeconds({ hours: 1 })).toBe(3600);
    expect(timeToSeconds({ minutes: 2 })).toBe(120);
    expect(timeToSeconds({ seconds: 2 })).toBe(2);
    expect(timeToSeconds({ hours: 1, seconds: 5 })).toBe(3605);
    expect(timeToSeconds({ hours: 0, minutes: 0, seconds: 0 })).toBe(0);
    expect(timeToSeconds({ hours: 0, minutes: 0, seconds: 1 })).toBe(1);
    expect(timeToSeconds({ hours: 0, minutes: 1, seconds: 30 })).toBe(90);
    expect(timeToSeconds({ hours: 1, minutes: 2, seconds: 3 })).toBe(3723);
  });

  test('calculateSpeed function', () => {
    expect(calculateSpeed()).toBe('0.00');
    expect(calculateSpeed(0)).toBe('0.00');
    expect(calculateSpeed(0, 0)).toBe('0.00');
    expect(calculateSpeed(3600, 1000)).toBe('1.00');
    expect(calculateSpeed(3600, 10000)).toBe('10.00');
    expect(calculateSpeed(123, 456)).toBe('13.35');
  });

  test('calculatePace function', () => {
    expect(calculatePace()).toEqual(0);
    expect(calculatePace(0)).toEqual(0);
    expect(calculatePace(0, 0)).toEqual(0);
    expect(calculatePace(123, 456)).toEqual(269);
    expect(calculatePace(360, 1000)).toEqual(360);
    expect(calculatePace(1800, 5000)).toEqual(360);
    expect(calculatePace(7200, 21097)).toEqual(341);
    expect(calculatePace(12600, 42195)).toEqual(298);
  });
});
