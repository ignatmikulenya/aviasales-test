import { addMinutes, format, intervalToDuration } from "date-fns";

const getRouteTime = (date: string, duration: number): string => {
  const start = new Date(date);
  const end = addMinutes(start, duration);
  return `${format(start, "HH:mm")} - ${format(end, "HH:mm")}`;
};

const getDuration = (date: string, duration: number): string => {
  const start = new Date(date);
  const end = addMinutes(start, duration);
  const interval = intervalToDuration({
    start,
    end,
  });

  const durationParts: string[] = [];
  if (interval.days) {
    durationParts.push(`${interval.days}д`);
  }
  if (interval.days) {
    durationParts.push(`${interval.hours}ч`);
  }
  if (interval.days) {
    durationParts.push(`${interval.minutes}с`);
  }

  return durationParts.join(" ");
};

export { getRouteTime, getDuration };
