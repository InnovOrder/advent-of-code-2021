import fs from 'fs'
import { pipe } from 'fp-ts/lib/function'
import { FileName, Input } from '../types'

type Utils = {
  readData: (file: FileName) => Input
}

export const utils: Utils = {
  readData: function(file: FileName): Input {
    return pipe(
      file,
      fs.readFileSync,
      s => s.toString('utf8'),
      s => s.split('\n'),
      arr => arr.map(n => parseInt(n, 10)),
    )
  },
}