function debounce(func, wait = 1000) {
    let timeout;

    // Lambda function will break the 'obj' functionality.
    // 'function' helps creating a scope.
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
            if(timeout) clearTimeout(timeout);
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

const debounceCount = debounce(count, 0);
debounceCount(10);
debounceCount(20);
debounceCount(30);
debounceCount(40);
debounceCount(50);
setTimeout(() => debounceCount(60), 0);

// const obj = {
//     name: 'hello',
//     func: debounce(countName)
// };

// obj.func();

/**
 * THROTTLE: Throtlle immedietly runs the first call and then skip all other calls until wait is over.
 * 
 * DEBOUNCE: Debounce waits and never executes untill incoming calls ends. Basically, it runs the last call.
 */
