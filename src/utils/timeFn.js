export const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

export function formatTimeFromHours(time) {
  const numericTime = Number(time);

  if (isNaN(numericTime)) {
    return "Invalid Time";
  }

  const seconds = Math.floor(numericTime % 60);
  const minutes = Math.floor((numericTime / 60) % 60);
  const hours = Math.floor(numericTime / 3600);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export const getCurrentDateFormatted = () => {
  const optionsFullDay = { weekday: "long" };
  const optionsFormattedDate = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const currentDate = new Date();

  const fullDayFormatter = new Intl.DateTimeFormat("en-US", optionsFullDay);
  const formattedDateFormatter = new Intl.DateTimeFormat("en-US", optionsFormattedDate);

  const fullDay = fullDayFormatter.format(currentDate);
  const formattedDate = formattedDateFormatter.format(currentDate);

  return { fullDay, formattedDate };
};
