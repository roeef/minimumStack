/**
 * MiniumumStack stack implement a stack (LIFO) (peak, push, pop, isEmpty) plus minVal
 * implementsation doesn't use a LOOP or extra stack memory - it hold a stack and the last minumum
 */
let MiniumumStack = function(){
    // a stack of the diffrences from the minimum
    this.diffStack = [];
    this.min = null;

     // Pushes The value currentValue parmeter into the min stack
    this.push = function(currentValue){
        // if we have no previous minimun update the minumum value to currentValue
        if (this.isEmpty()) {
            this.min = currentValue;
        }

        // push the diffrence form the minumum into our stack
        this.diffStack.push(currentValue-this.min);

        // if currentValue is smaller than our minimum untill now - update the minimum to our new minumum - currentValue
        if (currentValue<this.min) {
            this.min = currentValue;
        }

    };

    // Return weather the stack is empty or not.
    this.isEmpty = function(){
        return this.diffStack.length === 0
    };

    // return the last value in the stack (the next on to pop)
    this.peek = function(){
        if (this.isEmpty()){
            return null;
        }
        let currValue = this.diffStack[this.diffStack.length-1];
        if (currValue<0) {
            return this.min; //+ currValue -currValue ;
        }
        return this.min+currValue;
    };

    // return the lowest value in the our stack
    this.minVal = function(){
        if (this.isEmpty()) {
            return null;
        }
        return this.min;
    };

    // return the last value in our stack and deletes it.
    this.pop = function(){
        if (this.isEmpty()) {
            return null;
        }

        let currValue = this.diffStack.pop();

        if (currValue<0) {
            this.min -=currValue;
        }

        return this.min + currValue;
    }
};

function runSomeTests() {
    let myStack = new MiniumumStack();
    console.log("test");

    console.log(`peekValue: ${myStack.peek()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);

    myStack.push(7);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    myStack.push(3);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    myStack.push(7);
    myStack.push(9);
    myStack.push(5);
    myStack.push(5);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    myStack.push(5);
    myStack.push(4);
    myStack.push(1);
    myStack.push(5);
    myStack.push(-7);
    myStack.push(3);
    myStack.push(-13);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
    console.log(`peekValue: ${myStack.peek()} - minVal:${myStack.minVal()} - popValue: ${myStack.pop()} - minVal:${myStack.minVal()}`);
}

runSomeTests();
