class VigenereCipheringMachine {
    constructor(bool) {
        this.bool = bool;
    }

    encrypt(message, key) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
        message = message.toUpperCase();

        key = this.getKey(message, key, alphabet)

        let result = [];
        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                result.push(alphabet[(alphabet.indexOf(message[i]) + alphabet.indexOf(key[0])) % 26])
                key.shift();
            } else {
                result.push(message[i])
            }
        }

        if (this.bool === false) {
            return result.reverse().join('');
        }
        return result.join("");
    }

    decrypt(message, key) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("")
        message = message.toUpperCase();

        key = this.getKey(message, key, alphabet)

        let result = [];
        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                result.push(alphabet[(alphabet.indexOf(message[i]) - alphabet.indexOf(key[0]) + 26) % 26])
                key.shift();
            } else {
                result.push(message[i])
            }
        }
        if (this.bool === false) {
            return result.reverse().join('');
        }
        return result.join("");
    }

    getKey(message, key, alphabet) {
        let arr = []
        for (let i = 0; i < message.length; i++) {
            if (alphabet.includes(message[i])) {
                arr.push(message[i])
            }
        }
        arr = arr.join("")

        let b;
        if (arr.length > key.length) {
            let a = key.repeat(Math.floor(arr.length / key.length))
            b = a + key.slice(0, arr.length - a.length)
        } else {
            b = key.repeat(Math.ceil(arr.length / key.length))
        }
        return b.toUpperCase().split("")
    }
}

module.exports = VigenereCipheringMachine;
