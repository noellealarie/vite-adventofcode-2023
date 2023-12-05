import { Timeline, TimelineItem } from "./components/Timeline";
import { Day, DayPart, DayStatus } from "./components/Day";
import Days from "./days/Days";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let daysWidth = 0;
    let lastDayWidth = 0;
    Days.forEach((day) => {
      const currentDayWidth = document.getElementById(
        `timeline-item-${day.day}`
      )!.clientWidth;
      if (
        day.status === DayStatus.COMPLETED ||
        day.status === DayStatus.PARTIAL
      ) {
        daysWidth += currentDayWidth;
        lastDayWidth = currentDayWidth;
      }
    });

    const timelineContainer = document.getElementById(
      "timeline-container"
    ) as HTMLDivElement;
    const timelineList = document.getElementById(
      "timeline-list"
    ) as HTMLUListElement;
    const translateX =
      timelineContainer.clientWidth / 2 - daysWidth + lastDayWidth / 2;

    const translateXValue = `translateX(${translateX}px)`;
    timelineList.style.transform = translateXValue;
  }, []);

  return (
    <main className="w-screen">
      <div className="lg:container mx-auto prose">
        <h1 className="text-center my-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r to-primary from-secondary">
            Advent of Code
          </span>
        </h1>
      </div>
      <div
        id="timeline-container"
        className="lg:container mx-auto overflow-x-hidden not-prose m-5"
      >
        <Timeline>
          {Days.map((day, index) => (
            <TimelineItem key={index} day={day} />
          ))}
        </Timeline>
      </div>
      <div className="lg:container mx-auto prose text-center">
        {Days.map((day, index) => (
          <Day key={index} {...day}>
            {day.parts.map((part, index) => (
              <DayPart key={index} part={part.part} result={part.result} />
            ))}
          </Day>
        ))}
      </div>
    </main>
  );
}

export default App;
