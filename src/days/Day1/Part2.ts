import { DayPartProps } from "../../components/DayPart";
import input from "../../assets/day1-input.txt?raw";

// --- Day 1: Trebuchet?! ---

/* const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`; */

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const string_or_number = (number: string): string => {
  if (parseInt(number)) {
    return number;
  } else {
    return numbers.indexOf(number).toString();
  }
};

const get_number = (line: string): number => {
  let first_digit: [string, number] = ["", line.length];
  let last_digit: [string, number] = ["", -1];
  numbers.forEach((number) => {
    const first_index = line.indexOf(number);
    const last_index = line.lastIndexOf(number);
    if (first_index < first_digit[1] && first_index !== -1) {
      first_digit = [string_or_number(number), first_index];
    }
    if (last_index > last_digit[1] && last_index !== -1) {
      last_digit = [string_or_number(number), last_index];
    }
  });
  return parseInt(first_digit[0] + last_digit[0]);
};

const getSum = (): number => {
  const lines = input.split("\n");
  let sum = 0;
  for (const line of lines) {
    sum += get_number(line);
  }
  return sum;
};

export const Part2: DayPartProps = { part: 2, result: getSum() };
