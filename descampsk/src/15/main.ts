import { readInputs } from "../helpers/read-inputs";

const TEST_INPUT_PATH = `${__dirname}/input.test`;
const INPUT_PATH = `${__dirname}/input`;

const decodeInput = async (inputPath: string): Promise<number[][]> => {
  const lines = await readInputs(inputPath);
  lines.pop();
  return lines.map((line) => [...line].map((number) => parseInt(number, 10)));
};

let completeMinLowestPath = 10000;
let numberOfPathFound = 0;

const findLowestRiskPath = (
  { x, y }: { x: number; y: number },
  sum: number,
  matrix: number[][]
): number => {
  if (x === matrix.length - 1 && y === matrix[x].length - 1) {
    const fullSum = sum + matrix[x][y];
    numberOfPathFound += 1;
    if (numberOfPathFound % 10 === 0) {
      console.log("numberOfPathFound", numberOfPathFound);
      console.log("fullSum", fullSum);
      console.log("completeMinLowestPath", completeMinLowestPath);
    }

    if (fullSum < completeMinLowestPath) {
      completeMinLowestPath = fullSum;
    }
    return fullSum;
  }

  if (sum > completeMinLowestPath) {
    return 10000;
  }

  const rightLowestRiskPath =
    y + 1 < matrix[x].length
      ? findLowestRiskPath({ x, y: y + 1 }, sum + matrix[x][y], matrix)
      : 10000;

  const downLowestRiskPath =
    x + 1 < matrix[x].length
      ? findLowestRiskPath({ x: x + 1, y }, sum + matrix[x][y], matrix)
      : 10000;

  const upLowestRiskPath =
    x - 1 < matrix[x].length
      ? findLowestRiskPath({ x: x - 1, y }, sum + matrix[x][y], matrix)
      : 10000;

  const leftLowestRiskPath =
    y - 1 < matrix[x].length
      ? findLowestRiskPath({ x, y: y - 1 }, sum + matrix[x][y], matrix)
      : 10000;

  const min = Math.min(rightLowestRiskPath, downLowestRiskPath);
  return min < 10000 ? min : sum;
};

const resolveFirstPuzzle = async (inputPath: string) => {
  const matrix = await decodeInput(inputPath);
  const lowestRiskPath = findLowestRiskPath({ x: 0, y: 0 }, 0, matrix);
  return completeMinLowestPath - matrix[0][0];
};

const resolveSecondPuzzle = async (inputPath: string) => {
  const decodedInputs = await decodeInput(inputPath);
  return 0;
};

const main = async () => {
  completeMinLowestPath = 100;
  numberOfPathFound = 0;
  const resultFirstPuzzleTest = await resolveFirstPuzzle(TEST_INPUT_PATH);
  console.log("The result of the first puzzle test is:", resultFirstPuzzleTest);

  // completeMinLowestPath = 700;
  // numberOfPathFound = 0;
  // const resultFirstPuzzle = await resolveFirstPuzzle(INPUT_PATH);
  // console.log("The result of the first puzzle is: ", resultFirstPuzzle);

  // const resultSecondPuzzleTest = await resolveSecondPuzzle(TEST_INPUT_PATH);
  // console.log(
  //   "The result of the second puzzle test is:",
  //   resultSecondPuzzleTest
  // );
  // const resultSecondPuzzle = await resolveSecondPuzzle(INPUT_PATH);
  // console.log("The result of the second puzzle is: ", resultSecondPuzzle);
};

main().catch((error) => {
  console.error(error);
});
