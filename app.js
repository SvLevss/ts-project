"use strict";
const firstShift = 'a'.charCodeAt(0);
const lastShift = 'z'.charCodeAt(0);
function shiftCipher(str, shift = -1) {
    shift = shift % (lastShift - firstShift + 1);
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code < firstShift || code > lastShift) {
            result += str[i];
        }
        else {
            code += shift;
            if (code > lastShift) {
                code -= lastShift;
                code += firstShift - 1;
            }
            result += String.fromCharCode(code);
        }
    }
    return result;
}
console.log(shiftCipher("abc", 1));
console.log(shiftCipher("abz", 27));
console.log(shiftCipher("abz", 1000));
function shiftDecipher(str, shift = -1) {
    shift = shift % (lastShift - firstShift + 1);
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code < firstShift || code > lastShift) {
            result += str[i];
        }
        else {
            code -= shift;
            if (code > lastShift) {
                code -= lastShift;
                code += firstShift - 1;
            }
            result += String.fromCharCode(code);
        }
    }
    return result;
}
console.log(shiftDecipher("bcd", 1));
console.log(shiftDecipher("bca", 27));
console.log(shiftDecipher("mnl", 1000));
//# sourceMappingURL=app.js.map