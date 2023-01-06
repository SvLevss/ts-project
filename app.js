"use strict";
function shiftCipher(str, shift = 1) {
    str = str.toLowerCase();
    let result = '';
    let charcode = 0;
    for (let i = 0; i < str.length; i++) {
        charcode = str.charCodeAt(i) + shift;
        result += String.fromCharCode(charcode);
    }
    return result;
}
console.log(shiftCipher("abc", 1));
function shiftDecipher(str, shift = 1) {
    str = str.toLowerCase();
    let result = '';
    let charcode = 0;
    for (let i = 0; i < str.length; i++) {
        charcode = str.charCodeAt(i) - shift;
        result += String.fromCharCode(charcode);
    }
    return result;
}
console.log(shiftDecipher("bcd", 1));
//# sourceMappingURL=app.js.map