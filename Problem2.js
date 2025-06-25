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