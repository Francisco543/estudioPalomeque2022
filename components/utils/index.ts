export const truncateString = (text: string, long: number): string =>
  text?.length > long ? `${text.slice(0, long - 3)}...` : text;
