const sample = [1, 2, [3, 4], 5, [6, [7, [8, 9], 10], 11], 12];

function flatten(arr) {
    const result = [];

    arr.forEach(el => {
        if (Array.isArray(el)) {
            result.push(...flatten(el));
        } else {
            result.push(el);
        }
    });

    return result;
}

console.log(`Length: ${sample.length}; ${sample.join(', ')}`);
console.log('---------------------------------');
const flat = flatten(sample);
console.log(`Length: ${flat.length}; ${flat.join(', ')}`);
