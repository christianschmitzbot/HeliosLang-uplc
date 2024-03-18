import { ArgSizesConstCost } from "../costmodel/index.js"
import { UplcList } from "../values/index.js"
import { asCekValue, asUplcValues } from "./cast.js"

/**
 * @typedef {import("./Builtin.js").Builtin} Builtin
 */

/**
 * @type {Builtin}
 */
export const mkCons = {
    name: "mkCons",
    forceCount: 1,
    nArgs: 2,
    CpuModel: ArgSizesConstCost,
    MemModel: ArgSizesConstCost,
    call: (args, ctx) => {
        const [item, list] = asUplcValues(args)

        if (!(list instanceof UplcList)) {
            throw new Error(
                `expected list as second argument of mkCons, got ${list?.toString()}`
            )
        }

        if (item === undefined) {
            throw new Error(
                `expected UplcValue as first argument of mkCons, got undefined`
            )
        }

        if (!list.itemType.isSameType(item)) {
            throw new Error(
                `item type doesn't correspond with list type in mkCons`
            )
        }

        return asCekValue(
            new UplcList(list.itemType, list.items.concat([item]))
        )
    }
}
