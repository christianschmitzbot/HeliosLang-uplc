import {
    makeArgSizesConstCost,
    makeArgSizesMinCost
} from "../../costmodel/index.js"
import { lessThanByteString as lessThanByteStringV1 } from "../v1/lessThanByteString.js"

/**
 * @import { Builtin } from "src/index.js"
 */
/**
 * @type {Builtin}
 */
export const lessThanByteString = {
    ...lessThanByteStringV1,
    cpuModel: (params) => makeArgSizesMinCost(params.get(91), params.get(90)),
    memModel: (params) => makeArgSizesConstCost(params.get(92))
}
