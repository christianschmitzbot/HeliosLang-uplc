import { makeArgSizesConstCost } from "../../costmodel/index.js"
import { sndPair as sndPairV1 } from "../v1/sndPair.js"

/**
 * @import { Builtin } from "src/index.js"
 */

/**
 * @type {Builtin}
 */
export const sndPair = {
    ...sndPairV1,
    cpuModel: (params) => makeArgSizesConstCost(params.get(165)),
    memModel: (params) => makeArgSizesConstCost(params.get(166))
}
