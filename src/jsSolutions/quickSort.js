Array.prototype.quickSort = function () {

    function partition(arr, start, end) {
        let pi = start, pivot = arr[start];

        for (let i = start + 1; i <= end; i++) {
            if (arr[i] < pivot) {
                pi++;
                [arr[pi], arr[i]] = [arr[i], arr[pi]];
            }
        }
        [arr[pi], arr[start]] = [arr[start], arr[pi]];
        return pi;
    }

    function quickSort(arr, start = 0, end = arr.length - 1) {
        if (start < end) {
            const pivotIndex = partition(arr, start, end);
            quickSort(arr, start, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, end);
        }
        return arr;
    }

    return quickSort(this);
}

const arr = [4, 87, 23, 64, 846, 5, 8, 7, 12, 5, 64, 47, 2, 3, 6, 64, 5];

console.log([...arr].sort((a, b) => a - b));
console.log([...arr].quickSort());
