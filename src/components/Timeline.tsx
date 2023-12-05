import { Icon } from "@iconify/react";
import { DayProps, DayStatus } from "./Day";

export type TimelineProps = {
  children: React.ReactNode[];
};

export type TimelineItemProps = {
  day: DayProps;
};

type TimelineIconProps = {
  icon: string;
  opacity: string;
};

const TimelineIcon = ({ icon }: TimelineIconProps) => {
  return (
    <span className="">
      <Icon icon={icon} className={`w-10 h-10 text-primary`} />
    </span>
  );
};

export const TimelineItem = ({ day }: TimelineItemProps) => {
  const getProps = (status: DayStatus): [string, string] => {
    let opacity: string;
    let icon: string;
    if (status === DayStatus.NOTSTARTED) {
      opacity = "50";
      icon = "ph:circle-dashed";
    } else if (status === DayStatus.STARTED) {
      opacity = "60";
      icon = "ph:circle";
    } else if (status === DayStatus.PARTIAL) {
      opacity = "80";
      icon = "ph:circle-half-fill";
    } else if (status === DayStatus.COMPLETED) {
      opacity = "0";
      icon = "ph:circle-fill";
    } else {
      opacity = "50";
      icon = "ph:circle";
    }
    return [opacity, icon];
  };

  const [opacity, icon] = getProps(day.status);

  return (
    <li id={`timeline-item-${day.day}`}>
      {day.day !== 1 ? <hr className={`bg-primary`} /> : null}
      <div className={"timeline-start"}>
        <span>Day {day.day}</span>
      </div>
      <div className="timeline-middle">
        <TimelineIcon icon={icon} opacity={opacity} />
      </div>
      <div className="timeline-end timeline-box">{day.title}</div>
      <hr className={`bg-primary`} />
    </li>
  );
};

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <ul
      id="timeline-list"
      className="timeline duration-1000 transition-transform ease-in-out transform"
    >
      {children}
    </ul>
  );
};
