export function secondsToTime(value) {
  const hours = Math.floor(value / 3600);
  const hoursRemainder = value - hours * 3600;
  const minutes = Math.floor(hoursRemainder / 60);
  const seconds = Math.round(hoursRemainder - minutes * 60);

  return {
    hours,
    minutes,
    seconds
  };
}

export function timeToSeconds(timeObj) {
  return (
    parseInt(timeObj.hours || 0) * 3600 +
    parseInt(timeObj.minutes || 0) * 60 +
    parseInt(timeObj.seconds || 0)
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

  if (hours > 0) {
    return `${hours}:${pad(minutes)}:${pad(seconds)}`;
  } else {
    return `${pad(minutes)}:${pad(seconds)}`;
  }
}

export function pad(value, size = 2) {
  return String(value).padStart(size, '0');
}

export function displayTime(timeObj) {
  return `${timeObj.hours}:${pad(timeObj.minutes)}:${pad(timeObj.seconds)}`;
}
