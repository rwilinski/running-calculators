type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const secondsToTime = (value = 0): Time => {
  const hours = Math.floor(value / 3600);
  const hoursRemainder = value - hours * 3600;
  const minutes = Math.floor(hoursRemainder / 60);
  const seconds = Math.round(hoursRemainder - minutes * 60);

  return {
    hours,
    minutes,
    seconds,
  };
};

export const timeToSeconds = ({ hours, minutes, seconds }: Time) => {
  return (hours || 0) * 3600 + (minutes || 0) * 60 + (seconds || 0);
};

export const calculateSpeed = (seconds = 0, distance = 0) => {
  const hours = seconds / 3600;
  const km = distance / 1000;

  return Math.round((km / (hours || 1)) * 100) / 100;
};

export const calculatePace = (seconds = 0, distance = 0) => {
  return Math.floor((1000 * seconds) / (distance || 1));
};
