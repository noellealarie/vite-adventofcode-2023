import { DayProps } from "./Day";

export type TimelineProps = {
  children: React.ReactNode[];
};

export type TimelineItemProps = {
  day: DayProps;
};

type TimelineIconProps = {
  color?: string;
};

const TimelineIcon = ({ color }: TimelineIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`w-10 h-10 ${color ? color : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const getColor = (results: number): string | undefined => {
  switch (results) {
    case 0:
      return undefined;
    case 1:
      return "primary";
    case 2:
      return "accent";
    default:
      break;
  }
};
export const TimelineItem = ({ day }: TimelineItemProps) => {
  const color = getColor(day.results.length);
  const hrColor = color ? `bg-primary` : undefined;
  const textColor = color ? `text-${color}` : undefined;
  const title = day.title === "" ? `?` : day.title;
  return (
    <li>
      {day.day !== 1 ? <hr className={hrColor} /> : null}
      <div className={`timeline-start ${textColor ? textColor : ""}`}>
        Day {day.day}
      </div>
      <div className="timeline-middle">
        <TimelineIcon color={textColor} />
      </div>
      <div
        className={`timeline-end timeline-box ${textColor ? textColor : ""}`}
      >
        {title}
      </div>
      <hr className={hrColor} />
    </li>
  );
};

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="overflow-x-auto not-prose">
      <ul className="timeline">{children}</ul>
    </div>
  );
};
