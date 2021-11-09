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
