import { DayPart } from "./DayPart";
import type { DayPartProps } from "./DayPart";

export type DayProps = {
  day: number;
  title: string;
  results: Array<DayPartProps>;
};

export const Day = ({ day, title, results }: DayProps) => {
  return (
    <div key={day} id={`day-${day}`}>
      <h2>
        --- Day {day}: {title} ---
      </h2>
      {results?.map((result, index) => (
        <DayPart key={index} part={result.part} result={result.result} />
      ))}
    </div>
  );
};
