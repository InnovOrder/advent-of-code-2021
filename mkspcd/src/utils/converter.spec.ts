import { converter } from './converter'

describe('converter', () => {
  describe('fromBinaryStringToDecimal', () => {
    it('converts a string of 1 and 0 to a base 10 number', () => {
      const n1 = '0101'
      const n2 = '1101'
      const n3 = '0001'
      
      expect(converter.fromBinaryStringToDecimal(n1)).toEqual(5)
      expect(converter.fromBinaryStringToDecimal(n2)).toEqual(13)
      expect(converter.fromBinaryStringToDecimal(n3)).toEqual(1)
    });
  });
})