// 基本用法
    // ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
        // 以前，为变量赋值，只能直接指定值。
        // let a = 1;
        // let b = 2;
        // let c = 3;
        // ES6 允许写成下面这样。
        // let [a, b, c] = [1, 2, 3];
    // 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
    // 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。

        let [foo, [[bar], baz]] = [1, [[2], 3]];
        console.log(foo); // 1
        console.log(bar); // 2
        console.log(baz); // 3

        // let [ , , third] = ["foo", "bar", "baz"];
        // third // "baz"
        //
        // let [x, , y] = [1, 2, 3];
        // x // 1
        // y // 3
        //
        // let [head, ...tail] = [1, 2, 3, 4];
        // head // 1
        // tail // [2, 3, 4]
        //
        // let [x, y, ...z] = ['a'];
        // x // "a"
        // y // undefined
        // z // []

    // 如果解构不成功，变量的值就等于undefined。
        //let [foo] = [];
        //foo//undefined
        //let [bar, foo] = [1];
        //foo//undefined

    // 不完全解构
        // let [x, y] = [1, 2, 3];
        // x // 1
        // y // 2
        //
        // let [a, [b], d] = [1, [2, 3], 4];
        // a // 1
        // b // 2
        // d // 4

    // 如果等号的右边不是数组（或者严格地说，不是可遍历的结构，参见《Iterator》一章），那么将会报错。
        //  报错
        // let [foo] = 1;
        // let [foo] = false;
        // let [foo] = NaN;
        // let [foo] = undefined;
        // let [foo] = null;
        // let [foo] = {};

                                                                    // 原生具备 Iterator 接口的数据结构如下。
                                                                    //
                                                                    // Array
                                                                    // Map
                                                                    // Set
                                                                    // String
                                                                    // TypedArray
                                                                    // 函数的 arguments 对象
                                                                    // NodeList 对象

// 默认值
    // 解构赋值允许指定默认值。
    //     let [foo = true] = [];
    //     foo // true
    //
    //     let [x, y = 'b'] = ['a']; // x='a', y='b'
    //     let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

    // 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，只有当一个数组成员严格等于undefined，默认值才会生效。
        let [x1 = 1] = [undefined];
        console.log(x1); // 1
        let [x2 = 1] = [null];
        console.log(x2) // null
    // 上面代码中，如果一个数组成员是null，默认值就不会生效，因为null不严格等于undefined。

    // 如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。
        // function f() {
        //     console.log('aaa');
        // }
        //
        // let [x = f()] = [1];
        // x//1
    // 上面代码中，因为x能取到值，所以函数f根本不会执行。上面的代码其实等价于下面的代码。
        // let x;
        // if ([1][0] === undefined) {
        //     x = f();
        // } else {
        //     x = [1][0];
        // }

    // 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
        // let [x = 1, y = x] = [];     // x=1; y=1
        // let [x = 1, y = x] = [2];    // x=2; y=2
        // let [x = 1, y = x] = [1, 2]; // x=1; y=2
        // let [x = y, y = 1] = [];     // ReferenceError: y is not defined
