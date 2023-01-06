const firstShift: number = 'a'.charCodeAt(0);
const lastShift: number = 'z'.charCodeAt(0);

function shiftCipher(str: string, shift: number = 1): string {
    return yesResult(str, shift);

}

function shiftDecipher(str: string, shift: number = 1): string {
    return yesResult(str, -shift);
}

function yesResult(str: string, shift: number = 1): string {
    shift = shift % (lastShift - firstShift + 1);

    let result: string = "";

    for (let i: number = 0; i < str.length; i++) {
        let code: number = str.charCodeAt(i);
        if (code < firstShift || code > lastShift) {
            result += str[i];
        } else {
            code += shift;
            if (code > lastShift) {
                code += (firstShift - lastShift) - 1;
            }
            result += String.fromCharCode(code);
        }
    }
    return result;
}

console.log(shiftCipher("abc", 1));
console.log(shiftCipher("abz", 27));
console.log(shiftCipher("abz", 1000));
console.log(shiftDecipher("bcd", 1));
console.log(shiftDecipher("bca", 27));
console.log(shiftDecipher("mnl", 1000));

