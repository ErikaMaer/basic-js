module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        if (arr instanceof Array) {
            for (let i = 0; i < arr.length; i++) {
                let a = this.calculateDepth(arr[i])
                if (a > depth) {
                    depth = a
                }
            }
            return 1 + depth
        } else {
            return 0
        }
    }
};
