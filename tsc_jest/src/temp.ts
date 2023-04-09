export const sum
    = (...num: number[]): number => 
        num.reduce((acc, val) => acc + val, 0);