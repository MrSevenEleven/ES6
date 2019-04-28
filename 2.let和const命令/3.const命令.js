// 基本用法
    // const声明一个只读的常量。一旦声明，常量的值就不能改变。
    // const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
    // const的作用域与let命令相同：只在声明所在的块级作用域内有效。
    // const命令声明的常量也是不提升，同样存在暂时性死区，只能在声明的位置后面使用。
    // const声明的常量，也与let一样不可重复声明。


// 本质
//     const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存
//     在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指向实际数据的指针。const只能
//     保证这个指针是固定的（即总是指向另一个固定的地址），至于它指向的数据结构是不是可变的，就完全不能控制了。
        const foo = {};
        // 为 foo 添加一个属性，可以成功
        foo.prop = 123;
        foo.prop // 123
        // 将 foo 指向另一个对象，就会报错
        // foo = {}; // TypeError: "foo" is read-only

        const a = [];
        a.push('Hello'); // 可执行
        a.length = 0;    // 可执行
        // a = ['Dave'];    // 报错

    // 如果真的想将对象冻结，应该使用Object.freeze方法。
        const foo1 = Object.freeze({});

        // 常规模式时，下面一行不起作用；
        // 严格模式时，该行会报错
        foo1.prop = 123;
        console.log(foo1);//{}

    // 除了将对象本身冻结，对象的属性也应该冻结。下面是一个将对象彻底冻结的函数。
        var constantize = (obj) => {
            Object.freeze(obj);
            Object.keys(obj).forEach( (key, i) => {
                if ( typeof obj[key] === 'object' ) {
                    constantize( obj[key] );
                }
            });
        };

// ES6 声明变量的六种方法
    // ES5 只有两种声明变量的方法：var命令和function命令。
    // ES6 除了添加let和const命令，后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6 一共有 6 种声明变量的方法。