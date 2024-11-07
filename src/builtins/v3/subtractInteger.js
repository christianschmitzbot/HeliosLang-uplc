import { makeArgSizesMaxCost } from "../../costmodel/index.js"
import { subtractInteger as subtractIntegerV1 } from "../v1/subtractInteger.js"

/**
 * @import { Builtin } from "src/index.js"
 */

/**
 * @type {Builtin}
 */
export const subtractInteger = {
    ...subtractIntegerV1,
    cpuModel: (params) => makeArgSizesMaxCost(params.get(168), params.get(167)),
    memModel: (params) => makeArgSizesMaxCost(params.get(170), params.get(169))
}
