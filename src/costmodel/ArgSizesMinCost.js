/**
 * @import { ArgSizesCost } from "../index.js"
 */

/**
 * @param {bigint} a
 * @param {bigint} b
 * @returns {ArgSizesCost}
 */
export function makeArgSizesMinCost(a, b) {
    return new ArgSizesMinCost(a, b)
}

/**
 * @implements {ArgSizesCost}
 */
class ArgSizesMinCost {
    /**
     * Slope
     * @readonly
     * @type {bigint}
     */
    a

    /**
     * Intercept
     * @readonly
     * @type {bigint}
     */
    b

    /**
     * @param {bigint} a - slope
     * @param {bigint} b - intercept
     */
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    /**
     * @param {bigint[]} argSizes
     * @returns {bigint}
     */
    calcCost(argSizes) {
        const m = argSizes
            .slice(1)
            .reduce((m, a) => (a < m ? a : m), argSizes[0])

        return this.a * m + this.b
    }
}
