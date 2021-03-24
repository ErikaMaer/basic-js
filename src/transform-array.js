module.exports = function transform(arr) {
    if (!arr) {
        throw Error();
    }
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-next":
                i += 1;
                break;
            case "--discard-prev":
                if (arr[i - 2] !== "--discard-next") {
                    a.pop();
                }
                break;
            case "--double-next":
                if (i < arr.length - 1) {
                    a.push(arr[i + 1]);
                }
                break;
            case "--double-prev":
                if (i - 1 >= 0 && arr[i - 2] !== "--discard-next") {
                    a.push(arr[i - 1]);
                }
                break;
            default:
                a.push(arr[i]);
        }
    }
    return a;
}
