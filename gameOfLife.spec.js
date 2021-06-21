import { deadOrAlive } from "./gameOfLife"

describe("cellStatus", () => {
    it("is a live cell it has fewer than 2 live neighbours, it dies", () => {
        const result = deadOrAlive(1, 1);
        expect(result).toBe(false);
    }),
    it("is a live cell it has more than 3 live neighbours, it dies", () => {
        const result = deadOrAlive(1, 5);
        expect(result).toBe(false);
    }),
    it("is a live cell it has 2 or 3 neighbours, it lives", () => {
        const result = deadOrAlive(1, 2);
        expect(result).toBe(true);
    }),
    it("is a dead cell with exactly 3 live neighbours, it lives", () => {
        const result = deadOrAlive(0, 3);
        expect(result).toBe(true);
    }),
    it("is a dead cell with not exactly 3 live neighbours, it stays dead", () => {
        const result = deadOrAlive(0, 1);
        expect(result).toBe(false);
    })
})