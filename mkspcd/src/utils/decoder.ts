import { pipe } from 'fp-ts/lib/function'
import * as A from 'fp-ts/Array'
import { Measurement } from '../types'

type Decoder = {
  toMeasurements: (input: string[]) => Measurement[]
}

export const decoder: Decoder = {
  toMeasurements: function (input: string[]): Measurement[] {
    return pipe(
      input,
      A.map(n => parseInt(n, 10)),
    )
  },
}