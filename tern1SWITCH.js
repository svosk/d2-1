let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

let b = a > 10 ? a : a * 2;
let result;

switch (true) {
    case (b > 5):
        result = 2 * a + 1;
        break;
    default:
        let c = a < 3 ? 1 : 2 * (a - 2);
        switch (true) {
            case (c > 4):
                result = 5;
                break;
            default:
                result = (a % 2 === 0) ? 6 : 7;
        }
}

console.log(`Result: ${result}`);