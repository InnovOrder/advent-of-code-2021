import fs from 'fs'
import path from 'path'
import { pipe } from 'fp-ts/lib/function'

type FileName = string
type Input = number []

const INPUT_FILE: FileName = path.join(__dirname, 'input.txt')

function readData(file: FileName): Input {
  return pipe(
    file,
    fs.readFileSync,
    s => s.toString('utf8'),
    s => s.split('\n'),
    arr => arr.map(n => parseInt(n, 10)),
  )
}

function largerMeasurements(file: FileName): number {
  let input: Input = readData(file)
  let count = 0

  for (let i = 1; i < input.length; i++)
    if (input[i] > input[i - 1]) count++

  return count
}

export const result = largerMeasurements(INPUT_FILE)
