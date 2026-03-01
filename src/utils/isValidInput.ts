export const isValidInput = (value: string) =>
  /^\d*$/.test(value) &&
  (value === "" || (parseInt(value) <= 9999 && parseInt(value) > 0));
