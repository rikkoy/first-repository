import _ from 'lodash'

declare module 'lodash' {
    export function shuffle<T>(arr: T[]): T[]
}
// // interface Lodash {
// //     shuffle<T>(arr: T[]): T[]
// // }
// // declare const _: Lodash

// declare namespace _ {
//     function shuffle<T>(arr: T[]): T[]
// }