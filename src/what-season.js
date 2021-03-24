module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!'
    }
    if (isNaN(date)) {
        throw Error();
    }
    let m = date.getMonth();
    if (m === 0 || m === 1 || m === 11) {
        return 'winter'
    }
    if (1 < m && m <= 4) {
        return 'spring'
    }
    if (4 < m && m <= 7) {
        return 'summer'
    }
    if (7 < m && m <= 10) {
        return 'autumn'
    }
}
