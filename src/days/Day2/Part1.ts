import { DayPartProps } from "../../components/DayPart";
import Day2Input from "../../assets/day2-input.txt?raw";

type Record = {
  game: number;
  sets: Array<{
    blue: number;
    green: number;
    red: number;
  }>;
};

/* const input = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`; */

const getGameNumber = (line: string): number => {
  return parseInt(
    line.slice(line.indexOf("Game") + 4, line.indexOf(":")).trim()
  );
};

const getSets = (line: string): Record["sets"] => {
  const sets: Record["sets"] = [];
  // remove game from line
  line = line.slice(line.indexOf(":") + 2, line.length).trim();
  // split sets
  const setsInGame = line.split(";");
  // for each set
  for (const set of setsInGame) {
    let red: number = 0;
    let green: number = 0;
    let blue: number = 0;
    const cubes = set.trim().split(",");
    for (const cube of cubes) {
      const color_quantity = cube.trim().split(" ");
      if (color_quantity[1] === "red") {
        red = parseInt(color_quantity[0]);
      } else if (color_quantity[1] === "green") {
        green = parseInt(color_quantity[0]);
      } else if (color_quantity[1] === "blue") {
        blue = parseInt(color_quantity[0]);
      }
    }
    sets.push({
      red,
      green,
      blue,
    });
  }

  return sets;
};

const getRecord = (line: string): Record => {
  return {
    game: getGameNumber(line),
    sets: getSets(line),
  };
};

const getIDSum = (records: Record[]): number => {
  let sum = 0;
  const cubes = { red: 12, green: 13, blue: 14 };
  for (const record of records) {
    let possible = true;
    for (const set of record.sets) {
      if (
        set.red > cubes.red ||
        set.green > cubes.green ||
        set.blue > cubes.blue
      ) {
        possible = false;
        break;
      }
      /* console.log(
        ` GAME ${record.game} POSSIBLE? ${possible}, RED: ${set.red} ${cubes.red}, GREEN: ${set.green} ${cubes.green}, BLUE: ${set.blue} ${cubes.blue}`
      ); */
    }
    if (possible) {
      sum += record.game;
      //console.log(`Game ${record.game} is possible, sum is now ${sum}`);
    }
  }
  return sum;
};

const getResult = (): number => {
  const lines = Day2Input.split("\n");
  const records: Record[] = [];
  for (const line of lines) {
    records.push(getRecord(line));
  }
  return getIDSum(records);
};

export const Part1: DayPartProps = { part: 2, result: getResult() };
