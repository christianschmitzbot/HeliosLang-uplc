import { ArgSizesProdCost, ArgSizesDiffCost } from "../../costmodel/index.js"
import { UplcInt } from "../../values/index.js"
import { asCekValue, asUplcValues } from "../cast.js"

/**
 * @typedef {import("../../cek/types.js").CekValue} CekValue
 * @typedef {import("../Builtin.js").Builtin} Builtin
 * @typedef {import("../BuiltinContext.js").BuiltinContext} BuiltinContext
 */

/**
 * @type {Builtin}
 */
export const divideInteger = {
    name: "divideInteger",
    forceCount: 0,
    nArgs: 2,
    cpuModel: (params) =>
        new ArgSizesProdCost(params.get(51), params.get(50), params.get(49)),
    memModel: (params) =>
        new ArgSizesDiffCost(params.get(54), params.get(52), params.get(53)),
    call: evalDivideInteger
}

/**
 *
 * @param {CekValue[]} args
 * @param {BuiltinContext} ctx
 * @returns {CekValue}
 */
export function evalDivideInteger(args, ctx) {
    const [a, b] = asUplcValues(args)

    if (a?.kind != "int") {
        throw new Error(
            `expected an integer for the first argument of divideInteger, got ${a?.toString()}`
        )
    }

    if (b?.kind != "int") {
        throw new Error(
            `expected an integer for the second argument of divideInteger, got ${b?.toString()}`
        )
    }

    if (b.value === 0n) {
        throw new Error(`division by 0`)
    }

    const x = a.value
    const y = b.value

    return asCekValue(
        new UplcInt(x / y - (x % y != 0n && x < 0n != y < 0n ? 1n : 0n))
    )
}