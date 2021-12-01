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

const input: Input = readData(INPUT_FILE)

function largerMeasurements(input: Input): number {
  let count = 0
  
  for (let i = 1; i < input.length; i++)
    if (input[i] > input[i - 1]) count++
  
  return count
}

function slidingLargerMeasurements(input: Input): number {
  let slidingInputs: Input = []

  for (let i = 2; i < input.length; i++)
    slidingInputs.push(input[i] + input[i - 1] + input[i - 2])

  return largerMeasurements(slidingInputs)
}

export const resultA = largerMeasurements(input)
export const resultB = slidingLargerMeasurements(input)
