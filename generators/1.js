//Обычные функции при вызове выполняются до конца, и только потом начинает выполняться остальной код.
// Генераторы - это функции, которые могут приостанавливать свое выполнение для выполнение каких-либо других асинхронных операций


function* getGenerator() {    //the function return generator
    yield 'start';

    yield 1;
    yield 2;

    yield 'end';
}

const gen = getGenerator();

console.log(gen.next());

console.log(1);     // теперь функция может прерывать свое выполнение, и делать какие-то ассинхронные операции между
                    // выполнением yield

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

