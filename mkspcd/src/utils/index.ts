import fs from 'fs'
import { pipe } from 'fp-ts/lib/function'
import { DirectionInput, DirectionInputs, FileName, MeasurementInput } from '../types'

type Utils = {
  readMeasurementsData: (file: FileName) => MeasurementInput
  readDirectionsData: (file: FileName) => DirectionInputs
}

export const utils: Utils = {
  readMeasurementsData: function (file: FileName): MeasurementInput {
    return pipe(
      file,
      fs.readFileSync,
      s => s.toString('utf8'),
      s => s.split('\n'),
      arr => arr.map(n => parseInt(n, 10)),
    )
  },

  readDirectionsData: function (file: FileName): DirectionInputs {
    return pipe(
      file,
      fs.readFileSync,
      s => s.toString('utf8'),
      s => s.split('\n'),
      s => s.map(
        s => s.split(' '),
      ),
      d => d.map(
        d => ({ direction: d[0], distance: Number(d[1]) }) as DirectionInput,
      ),
    )
  },
}