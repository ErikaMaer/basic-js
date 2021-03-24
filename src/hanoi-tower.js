module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let a = 2 ** (disksNumber) - 1;
    return {turns: a, seconds: Math.floor(3600 * a / turnsSpeed)}
};
