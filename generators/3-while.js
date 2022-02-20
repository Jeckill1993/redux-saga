function* counter () {
    let i = 0;
    while (true) {
        yield i++; //каждый раз возвращает значение i, после увеличивает на 1, обычная функция выполнялась бы бесконечно
                    // для продолжения выполнения мы каждый раз вызываем .next(), тем самым контролия. каккое значение когда вернуть
    }
}

const gen = counter();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());