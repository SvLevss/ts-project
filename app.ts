
function shiftCipher(str: string, shift: number = 1): string {
    
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


function shiftDecipher(str: string, shift: number = 1): string {
    str = str.toLowerCase();
    let result = '';
    let charcode = 0;
    for (let i = 0; i < str.length; i++) {
  
        charcode = str.charCodeAt(i) - shift;
        result += String.fromCharCode(charcode);
    }
    return result;
}

console.log(shiftDecipher("bcd",1) )

