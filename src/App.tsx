import { Timeline, TimelineItem } from "./components/Timeline";
import { Day } from "./components/Day";

import { Day1 } from "./days/Day1/Day1";
import { Day2 } from "./days/Day2/Day2";

const days = [Day1, Day2];
const daysLeft = Array.from({ length: 30 - days.length }).map((_, index) => ({
  day: days.length + index + 1,
  title: "?",
  results: [],
}));
days.push(...daysLeft);

function App() {
  return (
    <main className="w-screen">
      <div className="lg:container mx-auto prose">
        <h1 className="w-full text-center">Advent of Code</h1>
        <Timeline>
          {days.map((day, index) => (
            <TimelineItem key={index} day={day} />
          ))}
        </Timeline>
        {days.map((day, index) => (
          <Day key={index} {...day} />
        ))}
      </div>
    </main>
  );
}

export default App;
