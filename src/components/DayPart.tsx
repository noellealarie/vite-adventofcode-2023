export type DayPartProps = {
  part: number;
  result: React.ReactNode;
};

export const DayPart = ({ part, result }: DayPartProps) => {
  return (
    <div key={part}>
      <h3>--- Part {part} ---</h3>
      <p>{result}</p>
    </div>
  );
};
