import { readInputs } from "../helpers/read-inputs";

const resolvePuzzle = async (inputPath: string) => {
  const lines = await readInputs(inputPath);
  const directionAndUnits = lines.map((line) => {
    const lineSplitted = line.split(" ");
    return {
      direction: lineSplitted[0],
      unit: parseInt(lineSplitted[1], 10),
    };
  });
  let finalHorizontalPosition = 0;
  let finalDepth = 0;
  directionAndUnits.forEach((directionAndUnit) => {
    const { direction, unit } = directionAndUnit;
    switch (direction) {
      case "forward":
        finalHorizontalPosition += unit;
        break;
      case "up":
        finalDepth -= unit;
        break;
      case "down":
        finalDepth += unit;
        break;
      default:
        break;
    }
  });
  return finalDepth * finalHorizontalPosition;
};

const resolveSecondPuzzle = async (inputPath: string) => {
  const lines = await readInputs(inputPath);
  const directionAndUnits = lines.map((line) => {
    const lineSplitted = line.split(" ");
    return {
      direction: lineSplitted[0],
      unit: parseInt(lineSplitted[1], 10),
    };
  });
  let finalHorizontalPosition = 0;
  let finalDepth = 0;
  let aim = 0;
  directionAndUnits.forEach((directionAndUnit) => {
    const { direction, unit } = directionAndUnit;
    switch (direction) {
      case "forward":
        finalHorizontalPosition += unit;
        finalDepth += aim * unit;
        break;
      case "up":
        aim -= unit;
        break;
      case "down":
        aim += unit;
        break;
      default:
        break;
    }
  });
  return finalDepth * finalHorizontalPosition;
};

const main = async () => {
  const resultTest = await resolvePuzzle("./src//02/input.test");
  console.log(resultTest);
  const resultFirstPuzzle = await resolvePuzzle("./src//02/input");
  console.log(resultFirstPuzzle);

  const resultTestSecondPuzzle = await resolveSecondPuzzle(
    "./src//02/input.test"
  );
  console.log(resultTestSecondPuzzle);
  const resultSecondPuzzle = await resolveSecondPuzzle("./src//02/input");
  console.log(resultSecondPuzzle);
};

main().catch((error) => {
  console.error(error);
});
