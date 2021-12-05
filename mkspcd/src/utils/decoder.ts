import { pipe } from 'fp-ts/lib/function'
import * as A from 'fp-ts/Array'
import * as S from 'fp-ts/string'
import { Command, Measurement } from '../types'
import { utils } from '.'

type Decoder = {
  toCommands: (input: string[]) => Command[]
  toMeasurements: (input: string[]) => Measurement[]
}

export const decoder: Decoder = {
  toCommands: function (input: string[]): Command[] {
    return pipe(
      input,
      A.map(S.split(' ')),
      A.map(
        d => ({ direction: d[0], distance: Number(d[1]) }) as Command,
      ),
    )
  },
  
  toMeasurements: function (input: string[]): Measurement[] {
    return pipe(
      input,
      A.map(utils.parseStringToNumber),
    )
  },
}
