import { secondsToTime } from './TimeHelper';

export function pad(value = '', size = 2) {
  return String(value).padStart(size, '0');
}

export function displayTime(value, hideEmptyHours = false) {
  if (typeof value === 'number') {
    value = secondsToTime(value);
  }

  if (hideEmptyHours && !value.hours) {
    return `${pad(value.minutes)}:${pad(value.seconds)}`;
  }

  return `${pad(value.hours)}:${pad(value.minutes)}:${pad(value.seconds)}`;
}

export function displayDistance(value) {
  const valueFloor = Math.floor(value);

  if (!value || !valueFloor) {
    return `0 m`;
  }

  const km = Math.floor(valueFloor / 1000);
  const m = valueFloor - km * 1000;

  return [km ? `${km} km` : null, m ? `${m} m` : null]
    .filter(Boolean)
    .join(' ');
}
