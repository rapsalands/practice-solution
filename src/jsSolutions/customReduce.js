function customReduce(callback, seed) {
    const isSeedMissing = null == seed || undefined == seed;
    let index = isSeedMissing ? 1 : 0;
    let result = isSeedMissing ? this[0] : seed;

    for (let i = index; i < this.length; i++) {
        result = callback(result, this[i]);
    }

    return result;
}

Array.prototype.customReduce = customReduce;

const sampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sampleInput = ['1', '2', '3'];

function main() {
    const sum = sampleInput.customReduce((a, b) => a + b);
    console.log(sum);

    console.log(sampleInput.reduce((a, b) => a + b));
}

main();