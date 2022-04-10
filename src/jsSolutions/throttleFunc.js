function throttle(callback, wait = 0) {
    let timeout = null;

    return function (...args) {
        if (!timeout) {
            callback.apply(this, args);
            timeout = setTimeout(() => {
                clearInterval(timeout);
                timeout = null;
            }, wait);
        }
    }
}

let count = 1;

function write(num) {
    console.log(`Hello: ${num}`);
}

const throttleCb = throttle(write);
throttleCb(1);

/**
 * THROTTLE: Throtlle immedietly runs the first call and then skip all other calls until wait is over.
 * 
 * DEBOUNCE: Debounce waits and never executes untill incoming calls ends. Basically, it runs the last call.
 */