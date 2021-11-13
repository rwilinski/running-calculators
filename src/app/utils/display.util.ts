import { secondsToTime } from './time.util';

export const pad = (value: number | string, size = 2) => {
  return String(value).padStart(size, '0');
};

export const roundNumber = (number = 0) => {
  return Math.round(number * 100) / 100;
};

export const displayTime = (seconds = 0, hideEmptyHours = false) => {
  if (!seconds) {
    return hideEmptyHours ? '00:00' : '00:00:00';
  }

  const time = secondsToTime(seconds);

  if (hideEmptyHours && !time.hours) {
    return `${pad(time.minutes)}:${pad(time.seconds)}`;
  }

  return `${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}`;
};

export const displayDistance = (meters = 0) => {
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

export const displaySpeed = (speed = 0) => {
  return `${roundNumber(speed)} km/h`;
};

export const displayPace = (seconds = 0) => {
  return `${displayTime(seconds, true)} min/km`;
};
