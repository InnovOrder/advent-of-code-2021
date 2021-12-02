import fs from 'fs'
import { pipe } from 'fp-ts/lib/function'
import { FileName, MeasurementsInput } from '../types'

type Utils = {
  readMeasurementsData: (file: FileName) => MeasurementsInput
}

export const utils: Utils = {
  readMeasurementsData: function (file: FileName): MeasurementsInput {
    return pipe(
      file,
      fs.readFileSync,
      s => s.toString('utf8'),
      s => s.split('\n'),
      arr => arr.map(n => parseInt(n, 10)),
    )
  },
}