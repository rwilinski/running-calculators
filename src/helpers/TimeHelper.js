export function secondsToTime(value) {
  const hours = Math.floor(value / 3600);
  const hoursRemainder = value - hours * 3600;
  let minutes = Math.floor(hoursRemainder / 60);
  let seconds = Math.round(hoursRemainder - minutes * 60);

  // if (seconds === 60) {
  //   seconds = 0;
  //   minutes++;
  // }

  return {
    hours,
    minutes,
    seconds
  };
}

export function timeToSeconds(value) {
  return (
    parseInt(value.hours || 0) * 3600 +
    parseInt(value.minutes || 0) * 60 +
    parseInt(value.seconds || 0)
  );
}

export function calculateSpeed(time, distance) {
  const km = distance / 1000;
  const hours = time / 3600;

  return (km / hours).toFixed(2);
}

export function calculatePace(time, distance) {
  const tempo = (1000 * time) / distance;
  const hours = Math.floor(tempo / 3600);
  const minutes = Math.floor((tempo - hours * 3600) / 60);
  const seconds = Math.floor(tempo - hours * 3600 - minutes * 60);

  return timeToSeconds({
    hours,
    minutes,
    seconds
  });
}

export function pad(value, size = 2) {
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

  if (!valueFloor) {
    return `0 m`;
  }

  const km = Math.floor(valueFloor / 1000);
  const m = valueFloor - km * 1000;

  return `${km ? km + ' km ' : ''}${m ? m + ' m' : ''}`;
}
