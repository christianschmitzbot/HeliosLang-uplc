import {
    makeArgSizesConstCost,
    makeArgSizesDiagCost
} from "../../costmodel/index.js"
import { equalsString as equalsStringV1 } from "../v1/equalsString.js"

/**
 * @import { Builtin } from "src/index.js"
 */

/**
 * @type {Builtin}
 */
export const equalsString = {
    ...equalsStringV1,
    cpuModel: (params) =>
        makeArgSizesDiagCost(params.get(76), params.get(75), params.get(74)),
    memModel: (params) => makeArgSizesConstCost(params.get(77))
}
