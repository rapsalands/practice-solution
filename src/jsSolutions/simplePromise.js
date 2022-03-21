class SimplePromise {

    callbacks;
    onCatch;

    constructor(handler) {
        this.callbacks = [];
        setTimeout(() => {
            try {
                handler(this.resolve, this.reject);
            } catch (error) {
                this.onCatch(error);
            }
        }, 0);
    }

    resolve = (result) => {
        for (let i = 0; i < this.callbacks.length; i++) {
            const { onFullFilled, onRejected } = this.callbacks[i];

            try {
                result = onFullFilled(result);
            } catch (error) {
                if (onRejected) onRejected(error);
                else this.onCatch(error);

                return;
            }
        }
    }

    reject = (error) => {

    }

    catch = (callback) => {
        this.onCatch = callback;
    }

    then = (onFullFilled, onRejected) => {
        this.callbacks.push({ onFullFilled, onRejected });
        return this;
    }
}

function longTaskAsync() {

    return new SimplePromise((res, rej) => {
        setTimeout(() => res(100), 2000);
    });
}

function longTask() {
    return new SimplePromise((res, rej) => res(100));
}

function expTask() {
    return new Promise((res, rej) => {
        rej("Exception seen.");
    });
}

function expTaskAsync() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Exception seen.");
        }, 0);
    });
}

function main() {

    const asyncText = 'Async', asyncText2 = 'Async2', syncText = 'Sync';

    longTask()
        .then(result => logAndIncrement(result, syncText))
        .then(result => logAndIncrement(result, syncText))
        .then(result => logAndIncrement(result, syncText))
        .then(result => logAndIncrement(result, syncText));

    longTaskAsync()
        .then(result => logAndIncrement(result, asyncText))
        .then(result => logAndIncrement(result, asyncText))
        .then(result => {
            throw new Error("Hello Error Message!!!!");
        })
        .then(result => logAndIncrement(result, asyncText))
        .catch(error => console.log(`Catch - ${error.message}`));

    longTaskAsync()
        .then(result => logAndIncrement(result, asyncText2))
        .then(result => logAndIncrement(result, asyncText2))
        .then(result => logAndIncrement(result, asyncText2))
        .then(result => logAndIncrement(result, asyncText2))
        .catch(error => console.log(`Catch - ${error.message}`));

    expTask().then(null, err => console.log(`Sync Exception - ${err}`));

    expTaskAsync().then(null, err => console.log(`Async Exception - ${err}`));

    function logAndIncrement(result, pretext) {
        console.log(`${pretext}-${result}`);
        return result + 50;
    }
}

main();

/**
 * Go to Menu "View" and click "Debug Console".
 * On VS Code left panel, navigate to Debug tab and click "Run and Debug" and select "Node.js".
 */