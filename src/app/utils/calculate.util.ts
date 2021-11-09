export const calculateSpeed = (seconds = 0, distance = 0) => {
  const hours = seconds / 3600;
  const km = distance / 1000;

  return Math.round((km / (hours || 1)) * 100) / 100;
};

export const calculatePace = (seconds = 0, distance = 0) => {
  return Math.floor((1000 * seconds) / (distance || 1));
};
