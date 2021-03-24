const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    return members.map(a => typeof (a) == "string" ? a.trim().slice(0, 1).toUpperCase() : "").sort().join("")
};
