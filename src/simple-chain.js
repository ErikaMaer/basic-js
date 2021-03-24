const chainMaker = {
    a: [],
    getLength() {
        this.a.length
        return this
    },
    addLink(value) {
        if (value === undefined) {
            this.a.push('( )')
        }
        this.a.push(`( ${String(value)} )`)
        return this
    },
    removeLink(position) {
        if (!position) {
            this.a = [];
            throw Error()
        }
        this.a.splice(position - 1, 1)
        return this
    },
    reverseChain() {
        this.a.reverse()
        return this
    },
    finishChain() {
        let b = this.a.join("~~")
        this.a = [];
        return b
    }
};

module.exports = chainMaker;
