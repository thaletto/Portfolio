export function calculateDuration(start: Date, end: Date): string {
  if (start > end) return "0 months";

  const diffInMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  let durationString = "";
  if (years > 0) durationString += `${years} year${years > 1 ? "s" : ""}`;
  if (months > 0) {
    if (years > 0) durationString += " and ";
    durationString += `${months} month${months === 1 ? "" : "s"}`;
  }

  return durationString || "0 months";
}