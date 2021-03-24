const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let k = (Math.log(2) / HALF_LIFE_PERIOD)
    return /^([1-9]|1[0-5]|[1-9][.,][0-9]+|1[0-4][.,][0-9]+)$/.test(sampleActivity) && typeof (sampleActivity) == "string" ?
        Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k) : false
};
