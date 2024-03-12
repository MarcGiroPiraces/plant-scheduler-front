export const getFormattedDateUE = (date: Date) =>
  new Date(date).toLocaleDateString("cat-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
