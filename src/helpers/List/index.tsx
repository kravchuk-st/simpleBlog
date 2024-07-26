export const ListItems = (arr: string[]) =>
  arr?.map((str, i) => <li key={i}>{str}</li>);
