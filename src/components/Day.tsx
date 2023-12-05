export enum DayStatus {
  NOTSTARTED = "NOT STARTED",
  STARTED = "STARTED",
  PARTIAL = "PARTIALLY DONE",
  COMPLETED = "COMPLETED",
}

export type DayProps = {
  day: number;
  title: string;
  parts: Array<DayPartProps>;
  status: DayStatus;
  children?: React.ReactNode;
};

export type DayPartProps = {
  part: number;
  result: React.ReactNode;
};

export const Day = ({ day, title, parts, status, children }: DayProps) => {
  return (
    <>
      <div className={parts.length === 0 ? "" : "collapse collapse-arrow"}>
        {parts.length === 0 ? null : (
          <input type="radio" name="days-accordion" />
        )}
        <div
          key={day}
          id={`day-${day}`}
          className={
            parts.length === 0
              ? ""
              : "collapse-title bg-base-200 text-base-content"
          }
        >
          <h2 className="text-base-content">
            Day {day}: {title}{" "}
            <span className="badge badge-primary badge-outline badge-xs">
              {status}
            </span>
          </h2>
        </div>
        {parts.length === 0 ? null : (
          <div className="collapse-content">{children}</div>
        )}
      </div>
    </>
  );
};

export const DayPart = ({ part, result }: DayPartProps) => {
  return (
    <div key={part}>
      <h3>Part {part}</h3>
      <p>{result}</p>
    </div>
  );
};
