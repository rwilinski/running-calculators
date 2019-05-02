import {
  secondsToTime,
  timeToSeconds,
  calculateSpeed,
  calculatePace
} from './TimeHelper';

it('secondsToTime function', () => {
  expect(secondsToTime()).toEqual({ hours: 0, minutes: 0, seconds: 0 });
  expect(secondsToTime(1)).toEqual({ hours: 0, minutes: 0, seconds: 1 });
  expect(secondsToTime(30)).toEqual({ hours: 0, minutes: 0, seconds: 30 });
  expect(secondsToTime(60)).toEqual({ hours: 0, minutes: 1, seconds: 0 });
  expect(secondsToTime(61)).toEqual({ hours: 0, minutes: 1, seconds: 1 });
  expect(secondsToTime(3600)).toEqual({ hours: 1, minutes: 0, seconds: 0 });
  expect(secondsToTime(3601)).toEqual({ hours: 1, minutes: 0, seconds: 1 });
  expect(secondsToTime(4567)).toEqual({ hours: 1, minutes: 16, seconds: 7 });
});

it('timeToSeconds function', () => {
  expect(timeToSeconds()).toBe(0);
  expect(timeToSeconds({ hours: 0, minutes: 0, seconds: 0 })).toBe(0);
  expect(timeToSeconds({ hours: 0, minutes: 0, seconds: 1 })).toBe(1);
  expect(timeToSeconds({ hours: 0, minutes: 1, seconds: 30 })).toBe(90);
  expect(timeToSeconds({ hours: 1, minutes: 2, seconds: 3 })).toBe(3723);
});

it('calculateSpeed function', () => {
  expect(calculateSpeed()).toBe('0.00');
  expect(calculateSpeed(0)).toBe('0.00');
  expect(calculateSpeed(0, 0)).toBe('0.00');
  expect(calculateSpeed(3600, 1000)).toBe('1.00');
  expect(calculateSpeed(3600, 10000)).toBe('10.00');
  expect(calculateSpeed(123, 456)).toBe('13.35');
});

it('calculatePace function', () => {
  expect(calculatePace()).toEqual(0);
  expect(calculatePace(0)).toEqual(0);
  expect(calculatePace(0, 0)).toEqual(0);
  expect(calculatePace(123, 456)).toEqual(269);
  expect(calculatePace(360, 1000)).toEqual(360);
  expect(calculatePace(7200, 21097)).toEqual(341);
});
