import path from 'path'
import { FileName, MeasurementInput } from '../types'
import { utils } from '../utils'

const INPUT_FILE: FileName = path.join(__dirname, 'input.txt')

const input: MeasurementInput = utils.readMeasurementsData(INPUT_FILE)

function largerMeasurements(input: MeasurementInput): number {
  let count = 0
  
  for (let i = 1; i < input.length; i++)
    if (input[i] > input[i - 1]) count++
  
  return count
}

function slidingLargerMeasurements(input: MeasurementInput): number {
  let slidingInputs: MeasurementInput = []

  for (let i = 2; i < input.length; i++)
    slidingInputs.push(input[i] + input[i - 1] + input[i - 2])

  return largerMeasurements(slidingInputs)
}

export function run01(): void {
  console.log('Larger Measurements::', largerMeasurements(input))
  console.log('Sliding Larger Measurements::', slidingLargerMeasurements(input))
}
