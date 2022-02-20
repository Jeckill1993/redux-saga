function* getGenerator() {    //the function return generator
    yield 'start';

    const a = yield;
    console.log('a >>', a);

    const b = yield;
    console.log('b >>', b);

    yield  a + b;
    return 'end';
}

const gen = getGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next(10));
console.log(gen.next(20));
console.log(gen.next(20));