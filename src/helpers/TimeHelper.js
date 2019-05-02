export function secondsToTime(value = 0) {
  const hours = Math.floor(value / 3600);
  const hoursRemainder = value - hours * 3600;
  let minutes = Math.floor(hoursRemainder / 60);
  let seconds = Math.round(hoursRemainder - minutes * 60);

  return {
    hours,
    minutes,
    seconds
  };
}

export function timeToSeconds(value = {}) {
  return (
    parseInt(value.hours || 0) * 3600 +
    parseInt(value.minutes || 0) * 60 +
    parseInt(value.seconds || 0)
  );
}

export function calculateSpeed(time = 0, distance = 0) {
  const hours = time / 3600;
  const km = distance / 1000;

  return (km / (hours || 1)).toFixed(2);
}

export function calculatePace(time = 0, distance = 0) {
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
