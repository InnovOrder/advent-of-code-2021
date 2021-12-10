import { pipe } from 'fp-ts/lib/function'
import type { Matrix } from '../types'

export const matrix = {

  /**
   * Sums the columns of a matrix.
   * @example
   *     1 0 1 0
   *   + 1 0 1 0
   *   + 1 1 0 0
   *   = 3 1 2 0
   * @param matrix 
   * @returns an Array of number
   */
  sumColumns: function(matrix: Matrix): number[] {
    return matrix.reduce((sumOfRows, currentRow) => {
      currentRow.forEach((val, i) => {
        sumOfRows[i] = sumOfRows[i] + val
      })
      return sumOfRows
    })
  },

  getMostCommonBit: function(data: Matrix): number[] {
    return pipe(
      data,
      matrix.sumColumns,
      arr => arr.map(n => (n >= data.length / 2) ? 1 : 0),
    )
  }
}