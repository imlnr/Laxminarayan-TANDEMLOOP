function getRange(n) {
    const result = [];
    const last = n % 2 === 0 ? n - 1 : n;
    for (let i = 0; i < last; i++) {
        const val = i * 2 + 1;
        result.push(val)
    }
    return result.join(", ")
}

const pattern = getRange(5);
console.log(pattern)