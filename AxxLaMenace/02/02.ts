import { readInputs } from "../helpers/read-inputs";

const resolveFirstPuzzle = async () => {
  const linesString = await readInputs("./02/02.data.txt");
  let horizontal = 0;
  let depth = 0;
  linesString.forEach((lineString) => {
    const split = lineString.split(" ");
    const direction = split[0];
    const value = parseInt(split[1], 10);
    if (direction === "forward") {
      horizontal += value;
    } else if (direction === "down") {
      depth += value;
    } else if (direction === "up") {
      depth -= value;
    }
  });
  console.log("horizontal", horizontal);
  console.log("depth", depth);
  console.log("horizontal * depth =", horizontal * depth);
};

const resolveSecondPuzzle = async () => {
  const linesString = await readInputs("./02/02.data.txt");
  console.log("first line", linesString[0]);
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  linesString.forEach((lineString) => {
    const split = lineString.split(" ");
    const direction = split[0];
    const value = parseInt(split[1], 10);
    if (direction === "forward") {
      horizontal += value;
      depth += aim * value;
    } else if (direction === "down") {
      aim += value;
    } else if (direction === "up") {
      aim -= value;
    }
  });
  console.log("horizontal", horizontal);
  console.log("depth", depth);
  console.log("aim", aim);
  console.log("horizontal * depth =", horizontal * depth);
};
const main = async () => {
  await resolveFirstPuzzle();
  await resolveSecondPuzzle();
};

main().catch((error) => {
  console.error(error);
});
