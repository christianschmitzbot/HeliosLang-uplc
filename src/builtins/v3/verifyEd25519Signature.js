import {
    makeArgSizesConstCost,
    makeArgSizesThirdCost
} from "../../costmodel/index.js"
import { verifyEd25519Signature as verifyEd25519SignatureV1 } from "../v1/verifyEd25519Signature.js"

/**
 * @import { Builtin } from "src/index.js"
 */

/**
 * @type {Builtin}
 */
export const verifyEd25519Signature = {
    ...verifyEd25519SignatureV1,
    cpuModel: (params) =>
        makeArgSizesThirdCost(params.get(188), params.get(187)),
    memModel: (params) => makeArgSizesConstCost(params.get(189))
}
