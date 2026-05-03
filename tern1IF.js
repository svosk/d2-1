let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

let result;

// a > 10 ? a : a * 2
let b = a > 10 ? a : a * 2;

if (b > 5) {
    result = 2 * a + 1;
} else {
    // Шаг 2: c = (a < 3 ? 1 : 2 * (a - 2))
    let c = a < 3 ? 1 : 2 * (a - 2);
    if (c > 4) {
        result = 5;
    } else {
        result = (a % 2 === 0) ? 6 : 7;
    }
}

console.log(`Result: ${result}`);