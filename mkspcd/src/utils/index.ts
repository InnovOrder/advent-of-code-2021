export { decoder } from './decoder'
export { reader } from './reader'

// type Utils = {
//   readDirectionsData: (file: FileName) => DirectionInputs
// }

// export const utils: Utils = {

//   readDirectionsData: function (file: FileName): DirectionInputs {
//     return pipe(
//       file,
//       fs.readFileSync,
//       s => s.toString('utf8'),
//       s => s.split('\n'),
//       s => s.map(
//         s => s.split(' '),
//       ),
//       d => d.map(
//         d => ({ direction: d[0], distance: Number(d[1]) }) as DirectionInput,
//       ),
//     )
//   },

// }