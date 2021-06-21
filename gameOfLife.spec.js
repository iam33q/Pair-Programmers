import { deadOrAlive } from "./gameOfLife"

describe("cellStatus", () => {
    it("has fewer than 2 live neighbours, it dies", () => {
        const result = deadOrAlive(1, 1);
        expect(result).toBe(false);
    })
})