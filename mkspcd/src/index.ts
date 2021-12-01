import { run01 } from './day-01'

type Solutions = {
  1: () => void
}

const solutions: Solutions = {
  1: run01,
}

function run(puzzle: keyof Solutions) {
  return solutions[puzzle]()
}

run(1)
