import { DayProps, DayStatus } from "../components/Day";
const maxDays = 30;

const Days: DayProps[] = [];

import { Day1 } from "./Day1/Day1";
import { Day2 } from "./Day2/Day2";
import { Day3 } from "./Day3/Day3";
import { Day4 } from "./Day4/Day4";

Days.push(Day1, Day2, Day3, Day4);

for (let day = Days.length; day <= maxDays; day++) {
  Days.push({
    day,
    title: "?",
    parts: [],
    status: DayStatus.NOTSTARTED,
  });
}

export default Days;
