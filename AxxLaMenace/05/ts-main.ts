import { readInputs } from "../helpers/read-inputs";

function createPoints(line: string) {
  const [point1, point2] = line.split(" -> ");
  const [xA, yA] = point1.split(",").map((item) => parseInt(item, 10));
  const [xB, yB] = point2.split(",").map((item) => parseInt(item, 10));
  return [xA, yA, xB, yB];
}

function computePointsInSegment(
  points: number[],
  considerDiagonals: Boolean = false
) {
  const xA = points[0];
  const yA = points[1];
  const xB = points[2];
  const yB = points[3];
  const xMin = Math.min(xA, xB);
  const xMax = Math.max(xA, xB);
  const yMin = Math.min(yA, yB);
  const yMax = Math.max(yA, yB);
  let pointsInSegment = [];
  if (xA == xB) {
    for (let y = yMin; y <= yMax; y++) {
      pointsInSegment.push(`${xA},${y}`);
    }
  } else if (yA == yB) {
    for (let x = xMin; x <= xMax; x++) {
      pointsInSegment.push(`${x},${yA}`);
    }
  } else if (considerDiagonals && yMax - yMin == xMax - xMin) {
    for (let i = 0; i <= xMax - xMin; i++) {
      pointsInSegment.push(
        `${xA + (i * (xB - xA)) / Math.abs(xB - xA)},${
          yA + (i * (yB - yA)) / Math.abs(yB - yA)
        }`
      );
    }
  }
  return pointsInSegment;
}

const solvePuzzle = (lines: string[], considerDiagonals: Boolean = false) => {
  const countDict: Record<string, number> = {};
  lines.forEach((line) => {
    const points = createPoints(line);
    const pointsInSegment = computePointsInSegment(points, considerDiagonals);
    pointsInSegment.forEach((point) => {
      countDict[point] = point in countDict ? countDict[point] + 1 : 1;
    });
  });
  const sumValues = Object.values(countDict).reduce(
    (a, b) => (b >= 2 ? a + 1 : a),
    0
  );
  return sumValues;
};

const main = async () => {
  const lines = await readInputs("./05/data.txt");
  console.log("result first puzzle:", solvePuzzle(lines, false));
  console.log("result second puzzle:", solvePuzzle(lines, true));
};

main().catch((error) => {
  console.error(error);
});
