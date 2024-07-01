export function getDates(addDays?: number) {
  if (!addDays) {
    return new Date().toISOString().substring(0, 10);
  }
  const today = new Date();
  today.setDate(today.getDate() + addDays); // Añadir 10 días a la fecha actual
  return today.toISOString().substring(0, 10);
}
