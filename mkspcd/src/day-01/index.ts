import path from 'path'
import { FileName, Input } from '../types'
import { utils } from '../utils'

const INPUT_FILE: FileName = path.join(__dirname, 'input.txt')

const input: Input = utils.readData(INPUT_FILE)

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

export function run01(): void {
  console.log('Larger Measurements::', largerMeasurements(input))
  console.log('Sliding Larger Measurements::', slidingLargerMeasurements(input))
}
