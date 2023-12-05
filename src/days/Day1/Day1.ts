import { Part1 } from "./Part1";
import { Part2 } from "./Part2";

import { DayProps, DayStatus } from "../../components/Day";

export const Day1: DayProps = {
  day: 1,
  title: "Trebuchet?!",
  parts: [Part1, Part2],
  status: DayStatus.COMPLETED,
};
