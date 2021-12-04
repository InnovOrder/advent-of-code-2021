import fs from 'fs'
import { pipe } from 'fp-ts/lib/function'
import { FileName } from '../types'

type Reader = {
  fromFile: (file: FileName) => string[]
}

export const reader: Reader = {
  fromFile: function (file: FileName): string[] {
    return pipe(
      file,
      fs.readFileSync,
      s => s.toString('utf8'),
      s => s.split('\n'),
      arr => arr.filter(line => line.length > 0),
    )
  },
}