// Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1, 3
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5, 7
//     .
//     .
//     5) input a = x, then output : 1, 3, 5, 7, .......


function getRange(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        const val = i * 2 + 1;
        result.push(val)
    }
    return result.join(", ")
}

const pattern = getRange(6);
console.log(pattern)