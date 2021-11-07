import { secondsToTime } from './time.util';

export const pad = (value: number | string, size = 2) => {
  return String(value).padStart(size, '0');
};

export const roundNumber = (num: number) => {
  return Math.round(num * 100) / 100;
};

export const displayTime = (seconds: number, hideEmptyHours = false) => {
  const time = secondsToTime(seconds);

  if (hideEmptyHours && !time.hours) {
    return `${pad(time.minutes)}:${pad(time.seconds)}`;
  }

  return `${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}`;
};

export const displayDistance = (meters: number) => {
  const valueFloor = Math.floor(meters);

  if (!meters || !valueFloor) {
    return `0 m`;
  }

  const km = Math.floor(valueFloor / 1000);
  const m = valueFloor - km * 1000;

  return [km ? `${km} km` : null, m ? `${m} m` : null]
    .filter(Boolean)
    .join(' ');
};

export const displaySpeed = (value = 0) => {
  return `${roundNumber(value)} km/h`;
};
