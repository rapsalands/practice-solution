function debounce(func, wait = 1000) {
    let timeout;

    // Lambda function will break the 'obj' functionality.
    // 'function' helps creating a scope.
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    }
}

function count(num) {
    console.log(num);
}

function countName() {
    console.log(this.name);
}

console.log("Started.");

const debounceCount = debounce(count, 1000);
debounceCount(10);
debounceCount(20);
debounceCount(30);
debounceCount(40);
debounceCount(50);
setTimeout(() => debounceCount(60), 1000);

const obj = {
    name: 'hello',
    func: debounce(countName)
};

obj.func();
