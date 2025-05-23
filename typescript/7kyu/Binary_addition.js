"use strict";
// Task
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBinary = addBinary;
// Implement a function that adds two numbers together and returns their sum in binary. 
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
function addBinary(a, b) {
    var sum = a + b;
    var binary = [];
    var quotient;
    var remainder;
    if (sum > 0) {
        quotient = Math.floor(sum / 2);
        remainder = sum % 2;
        binary.unshift(remainder);
        while (quotient > 0) {
            remainder = quotient % 2;
            quotient = Math.floor(quotient / 2);
            binary.unshift(remainder);
        }
        ;
        return binary.join('');
    }
    ;
    sum = Math.abs(sum);
    quotient = Math.floor(sum / 2);
    remainder = sum % 2;
    binary.unshift(remainder);
    while (quotient > 0) {
        remainder = quotient % 2;
        quotient = Math.floor(quotient / 2);
        binary.unshift(remainder);
    }
    ;
    // Pad to 32 bits for random tests 
    while (binary.length < 32) {
        binary.unshift(0);
    }
    ;
    // Invert bits
    var updatedBinary = binary.map(function (num) { return num === 1 ? 0 : 1; });
    var carry = 1;
    for (var i = updatedBinary.length - 1; i >= 0; i--) {
        if (updatedBinary[i] === 1 && carry === 1) {
            updatedBinary[i] = 0;
            carry = 1;
        }
        else if (updatedBinary[i] === 0 && carry === 1) {
            updatedBinary[i] = 1;
            carry = 0;
        }
    }
    ;
    return "-".concat(updatedBinary.join(''));
}
;
console.log(addBinary(12, -25));
