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

export function calculateAge(dob: Date): string {
  const today = new Date();
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
  }

  return `${years} years old`;
}