export function secondsToTime(value = 0) {
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

export function timeToSeconds({ hours = 0, minutes = 0, seconds = 0 } = {}) {
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
}

export function calculateSpeed(time = 0, distance = 0) {
  const hours = time / 3600;
  const km = distance / 1000;

  return (km / (hours || 1)).toFixed(2);
}

export function calculatePace(time = 0, distance = 0) {
  return Math.floor((1000 * time) / (distance || 1));
}
