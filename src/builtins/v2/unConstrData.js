import { makeArgSizesConstCost } from "../../costmodel/index.js"
import { unConstrData as unConstrDataV1 } from "../v1/unConstrData.js"

/**
 * @import { Builtin } from "src/index.js"
 */

/**
 * @type {Builtin}
 */
export const unConstrData = {
    ...unConstrDataV1,
    cpuModel: (params) => makeArgSizesConstCost(params.get(159)),
    memModel: (params) => makeArgSizesConstCost(params.get(160))
}
