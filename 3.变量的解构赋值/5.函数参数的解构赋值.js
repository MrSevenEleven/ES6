    function add([x, y]){
        return x + y;
    }

    add([1, 2]); // 3
// 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
    // 下面是另一个例子。
    // [[1, 2], [3, 4]].map(([a, b]) => a + b);
    // // [ 3, 7 ]


// 函数参数的解构也可以使用默认值。
    function move({x = 0, y = 0}={}) {
        return [x, y];
    }
    console.log(move({x: 3, y: 8})); // [3, 8]
    console.log(move({x: 3})); // [3, 0]
    console.log(move({})); // [0, 0]
    console.log(move()); // [0, 0]

    // 注意，下面的写法会得到不一样的结果。
    // function move({x, y} = { x: 0, y: 0 }) {
    //     return [x, y];
    // }
    //
    // move({x: 3, y: 8}); // [3, 8]
    // move({x: 3}); // [3, undefined]
    // move({}); // [undefined, undefined]
    // move(); // [0, 0]
    // 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。