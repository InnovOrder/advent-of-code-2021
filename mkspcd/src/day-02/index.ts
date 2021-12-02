import path from 'path'
import { DirectionInputs, FileName, Position } from '../types'
import { utils } from '../utils'

const INPUT_FILE: FileName = path.join(__dirname, 'input.txt')

const input: DirectionInputs = utils.readDirectionsData(INPUT_FILE)

function finalPositionAndFinalDepth(input: DirectionInputs): Position {
  let depth = 0
  let horizontal = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i].direction === 'forward') {
      horizontal += input[i].distance
    } else if (input[i].direction === 'down') {
      depth = depth + input[i].distance
    } else if (input[i].direction === 'up') {
      depth = depth - input[i].distance
    }
  }

  return { horizontal, depth }
}

function finalPositionAndFinalDepthWithAim(input: DirectionInputs): Position {
  let aim = 0
  let depth = 0
  let horizontal = 0

  for (let i = 0; i < input.length; i++) {
    if (input[i].direction === 'forward') {
      horizontal += input[i].distance
      depth = depth + aim * input[i].distance
    } else if (input[i].direction === 'down') {
      aim = aim + input[i].distance
    } else if (input[i].direction === 'up') {
      aim = aim - input[i].distance
    }

  }
  return { horizontal, depth }
}

export function run02(): void {
  const resultPart1 = finalPositionAndFinalDepth(input)
  const resultPart2 = finalPositionAndFinalDepthWithAim(input)

  console.log('\nFinal Position And Final Depth::')
  console.log('\tHorizontal Position:', resultPart1.horizontal)
  console.log('\tDepth:', resultPart1.depth)
  console.log('\tThe product is:', resultPart1.depth * resultPart1.horizontal)

  console.log('\nFinal Position And Final Depth With Aim::')
  console.log('\tHorizontal Position:', resultPart2.horizontal)
  console.log('\tDepth:', resultPart2.depth)
  console.log('\tThe product is:', resultPart2.depth * resultPart2.horizontal)
}
