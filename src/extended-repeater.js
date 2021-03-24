const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let separator = options.separator
    let addition = options.addition
    let additionSep = options.additionSeparator
    let repeat = options.repeatTimes
    let additionRep = options.additionRepeatTimes

    if (!separator) {
        separator = "+";
    }
    if (!additionSep) {
        additionSep = "|";
    }

    if (addition === undefined) {
        return (str + separator).repeat(repeat - 1) + str
    }

    return (str + (addition + additionSep).repeat(additionRep - 1)
        + addition + separator).repeat(repeat - 1) + str +
        (addition + additionSep).repeat(additionRep - 1) + addition
};  
