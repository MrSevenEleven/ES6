// 基本用法
        // function log(x, y = 'World') {
        //     console.log(x, y);
        // }
        //
        // log('Hello') // Hello World
        // log('Hello', 'China') // Hello China
        // log('Hello', '') // Hello
    // 另外，一个容易忽略的地方是，参数默认值不是传值的，而是每次都重新计算默认值表达式的值。也就是说，参数默认值是惰性求值的。
        // let x = 99;
        // function foo(p = x + 1) {
        //     console.log(p);
        // };
        //
        // foo();// 100
        //
        // x = 100;
        // foo(); // 101
    // 上面代码中，参数p的默认值是x + 1。这时，每次调用函数foo，都会重新计算x + 1，而不是默认p等于 100。

// 与解构赋值默认值结合使用
    // 参数默认值可以与解构赋值的默认值，结合起来使用。
        // 写法一
        function m1({x = 0, y = 0} = {}) {
            return [x, y];
        }

        // 写法二
        function m2({x, y} = { x: 0, y: 0 }) {
            return [x, y];
        }
    // 上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
    // 写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。

    // 函数没有参数的情况
    m1(); // [0, 0]
    m2(); // [0, 0]

    // x 和 y 都有值的情况
    m1({x: 3, y: 8}); // [3, 8]
    m2({x: 3, y: 8}); // [3, 8]

    // x 有值，y 无值的情况
    m1({x: 3}); // [3, 0]
    m2({x: 3}); // [3, undefined]

    // x 和 y 都无值的情况
    m1({}); // [0, 0];
    m2({}); // [undefined, undefined]

    m1({z: 3}); // [0, 0]
    m2({z: 3}); // [undefined, undefined]


// 参数默认值的位置
    // 通常情况下，定义了默认值的参数，应该是函数的尾参数。因为这样比较容易看出来，到底省略了哪些参数。如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
    //     // 例一
    //     function f(x = 1, y) {
    //         return [x, y];
    //     }
    //
    //     f(); // [1, undefined]
    //     f(2); // [2, undefined])
    //     f(, 1); // 报错
    //     f(undefined, 1); // [1, 1]
    // 上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。


// 函数的 length 属性
    // 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
    //     (function (a) {}).length // 1
    //     (function (a = 5) {}).length // 0
    //     (function (a, b, c = 5) {}).length // 2
    // 这是因为length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。
    // 同理，后文的 rest 参数也不会计入length属性。

    // 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。
        // (function (a = 0, b, c) {}).length // 0
        // (function (a, b = 1, c) {}).length // 1

// 作用域
    // 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。
    // 这种语法行为，在不设置参数默认值时，是不会出现的。
        // var x = 1;
        // function foo(x, y = function() { x = 2; }) {
        //     var x = 3;
        //     y();
        //     console.log(x);
        // }
        //
        // foo() // 3
        // x // 1
    // 上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
    // 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。
    // 函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。
    // 如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，所以最后输出的就是2，而外层的全局变量x依然不受影响。

// 应用
    // 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
    //     function throwIfMissing() {
    //         throw new Error('Missing parameter');
    //     }
    //
    //     function foo(mustBeProvided = throwIfMissing()) {
    //         return mustBeProvided;
    //     }
    //
    //     foo()
    //     // Error: Missing parameter
    // 另外，可以将参数默认值设为undefined，表明这个参数是可以省略的。
    // function foo(optional = undefined) { ··· }