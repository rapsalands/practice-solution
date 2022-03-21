import React from 'react';

const StackContainer: React.FC<Props> = ({ ...props }) => {

    const [stack, setStack] = React.useState<Stack>(new Stack());
    const [numStack, setNumStack] = React.useState<StackGeneric<number>>(new StackGeneric());
    const [strStack, setStrStack] = React.useState<StackGeneric<string>>(new StackGeneric());

    return (
        <React.Fragment>
            <label><b><u>Stack Example</u></b></label>
            <br />
            Push 4{stack.push(4)}
            <br />
            Has Any: {stack.hasAny() ? "true" : "false"}
            <br />
            Push 7{stack.push(7)}
            <br />
            Length: {stack.length()}
            <br />
            Pop {stack.pop()}
            <br />
            Pop {stack.pop()}
            <br />
            Length: {stack.length()}
            <br />
            Is Empty: {stack.isEmpty() ? "true" : "false"}
            <br />
            Has Any: {stack.hasAny() ? "true" : "false"}
            <br />
        </React.Fragment>
    );
}

export default StackContainer;

interface Props {

}

export class Stack {

    readonly list: number[];

    constructor() {
        this.list = [];
    }

    push = (value: number) => {
        this.list.push(value);
    }

    pop = (): number => {
        const value = this.list.pop();
        if (value == undefined) throw new Error("Stack is empty");
        return value;
    }

    isEmpty = () => !this.list.length;

    hasAny = () => !this.isEmpty();

    length = () => this.list.length;
}

export class StackGeneric<T> {

    readonly list: T[];

    constructor() {
        this.list = [];
    }

    push = (value: T) => {
        this.list.push(value);
    }

    pop = (): T => {
        const value = this.list.pop();
        if (value == undefined) throw new Error("Stack is empty");
        return value;
    }

    isEmpty = () => !this.list.length;

    hasAny = () => !this.isEmpty();

    length = () => this.list.length;
}