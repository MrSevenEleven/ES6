// 原生构造函数是指语言内置的构造函数，通常用来生成数据结构。ECMAScript 的原生构造函数大致有下面这些。
    // Boolean()
    // Number()
    // String()
    // Array()
    // Date()
    // Function()
    // RegExp()
    // Error()
    // Object()
// 以前，这些原生构造函数是无法继承的，比如，不能自己定义一个Array的子类。
        // function MyArray() {
        //     Array.apply(this, arguments);
        // }
        //
        // MyArray.prototype = Object.create(Array.prototype, {
        //     constructor: {
        //         value: MyArray,
        //         writable: true,
        //         configurable: true,
        //         enumerable: true
        //     }
        // });
    // 上面代码定义了一个继承 Array 的MyArray类。但是，这个类的行为与Array完全不一致。
        // var colors = new MyArray();
        // colors[0] = "red";
        // colors.length  // 0
        //
        // colors.length = 0;
        // colors[0]  // "red"
    // 之所以会发生这种情况，是因为子类无法获得原生构造函数的内部属性，通过Array.apply()或者分配给原型对象都不行。原生构造函数会忽略apply方法传入的this，也就是说，原生构造函数的this无法绑定，导致拿不到内部属性。
    // ES5 是先新建子类的实例对象this，再将父类的属性添加到子类上，由于父类的内部属性无法获取，导致无法继承原生的构造函数。比如，Array构造函数有一个内部属性[[DefineOwnProperty]]，用来定义新属性时，更新length属性，这个内部属性无法在子类获取，导致子类的length属性行为不正常。

    // ES6 允许继承原生构造函数定义子类，因为 ES6 是先新建父类的实例对象this，然后再用子类的构造函数修饰this，使得父类的所有行为都可以继承。下面是一个继承Array的例子。
        // class MyArray extends Array {
        //     constructor(...args) {
        //         super(...args);
        //     }
        // }
        //
        // var arr = new MyArray();
        // arr[0] = 12;
        // arr.length // 1
        //
        // arr.length = 0;
        // arr[0] // undefined
    // 上面代码定义了一个MyArray类，继承了Array构造函数，因此就可以从MyArray生成数组的实例。这意味着，ES6 可以自定义原生数据结构（比如Array、String等）的子类，这是 ES5 无法做到的。
    // 上面这个例子也说明，extends关键字不仅可以用来继承类，还可以用来继承原生的构造函数。因此可以在原生数据结构的基础上，定义自己的数据结构。