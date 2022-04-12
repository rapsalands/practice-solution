Array.prototype.countSort = function () {
    function findMinMaxFreq(arr) {
        let min = arr[0], max = arr[0], freq = {};
        arr.forEach(el => {
            min = Math.min(min, el);
            max = Math.max(max, el);

            if (freq[el] === undefined) freq[el] = 0;
            freq[el]++;
        });
        return { min, max, freq };
    }

    function constructArr(min, max, freq) {
        const keys = new Set(Object.keys(freq).map(n => +n));
        const result = [];

        while (min <= max) {
            if (keys.has(min)) {
                let count = 0;
                while (count++ < freq[min]) {
                    result.push(min);
                }
            }
            min++;
        }

        return result;
    }

    const { min, max, freq } = findMinMaxFreq(this);
    return constructArr(min, max, freq);
}

const arr = [4, 87, 23, 64, 846, 5, 8, 7, 12, 5, 64, 47, 2, 3, 6, 64, 5];

console.log([...arr].sort((a, b) => a - b));
console.log([...arr].countSort());
