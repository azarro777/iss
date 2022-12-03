import INspace from "./interfaces/INspace.interface";

export const countPeople = (arr: INspace[]): number => {
  let counter = 0;
  arr.map((el) => (el.craft === "ISS" ? counter++ : null));
  return counter;
};
