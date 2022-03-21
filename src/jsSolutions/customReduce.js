function customReduce(callback, seed) {
    let index = seed ? 0 : 1;
    let result = seed ? seed : this[0];

    for(let i = index; i < this.length; i++) {
        const el = this[i];

        result = callback(result, el);
    }

    return result;
}

Array.prototype.customReduce = customReduce;

const sampleInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sampleInput = ['1', '2', '3'];

function main() {
    const sum = sampleInput.customReduce((a, b) => a + b, '');
    console.log(sum);
}

main();