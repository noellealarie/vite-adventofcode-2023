import { DayPartProps } from "../../components/DayPart";
import Day1Input from "../../assets/day1-input.txt?raw";

// --- Day 1: Trebuchet?! ---

/* const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`; */

const find_first_digit = (line: string): string => {
  if (parseInt(line.charAt(0))) {
    return line.charAt(0);
  } else {
    return find_first_digit(line.slice(1));
  }
};

const find_last_digit = (line: string): string => {
  if (parseInt(line.charAt(line.length - 1))) {
    return line.charAt(line.length - 1);
  } else {
    return find_last_digit(line.slice(0, line.length - 1));
  }
};

const getSum = (): number => {
  const input = Day1Input;
  const lines = input.split("\n");
  let sum = 0;
  for (const line of lines) {
    sum += parseInt(find_first_digit(line) + find_last_digit(line));
  }
  return sum;
};

export const Part1: DayPartProps = { part: 1, result: getSum() };
