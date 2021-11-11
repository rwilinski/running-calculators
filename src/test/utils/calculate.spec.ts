import { calculateSpeed, calculatePace } from '../../app/utils/calculate.util';

describe('calculate utils', () => {
  test('calculateSpeed function', () => {
    [
      [undefined, undefined, 0],
      [0, undefined, 0],
      [0, 0, 0],
      [60, 1000, 60],
      [123, 456, 13.35],
      [3600, 1000, 1],
      [3600, 10000, 10],
      [6300, 21097, 12.06],
      [7200, 42195, 21.1],
    ].forEach((value) => {
      expect(calculateSpeed(value[0], value[1])).toEqual(value[2]);
    });
  });

  test('calculatePace function', () => {
    [
      [undefined, undefined, 0],
      [0, undefined, 0],
      [0, 0, 0],
      [60, 1000, 60],
      [123, 456, 269],
      [3600, 1000, 3600],
      [3600, 10000, 360],
      [6300, 21097, 298],
      [7200, 42195, 170],
    ].forEach((value) => {
      expect(calculatePace(value[0], value[1])).toEqual(value[2]);
    });
  });
});
