import { sum } from "../temp";                                   

test("要素数0の場合", () => {
    expect(sum()).toBe(0);
}); 

test("要素数2の場合", () => {
    expect(sum(1, 2)).toBe(3);
});