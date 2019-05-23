// Class 可以通过extends关键字实现继承，这比 ES5 的通过修改原型链实现继承，要清晰和方便很多。
        // class Point {
        // }
        //
        // class ColorPoint extends Point {
        // }
    // 上面代码定义了一个ColorPoint类，该类通过extends关键字，继承了Point类的所有属性和方法。但是由于没有部署任何代码，所以这两个类完全一样，等于复制了一个Point类。下面，我们在ColorPoint内部加上代码。
        // class ColorPoint extends Point {
        //     constructor(x, y, color) {
        //         super(x, y); // 调用父类的constructor(x, y)
        //         this.color = color;
        //     }
        //
        //     toString() {
        //         return this.color + ' ' + super.toString(); // 调用父类的toString()
        //     }
        // }
    // 上面代码中，constructor方法和toString方法之中，都出现了super关键字，它在这里表示父类的构造函数，用来新建父类的this对象。
    // 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法。如果不调用super方法，子类就得不到this对象。
        // class Point { /* ... */ }
        //
        // class ColorPoint extends Point {
        //     constructor() {
        //     }
        // }
        //
        // let cp = new ColorPoint(); // ReferenceError
    // 上面代码中，ColorPoint继承了父类Point，但是它的构造函数没有调用super方法，导致新建实例时报错。

    // ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面（Parent.apply(this)）。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。
    // 如果子类没有定义constructor方法，这个方法会被默认添加，代码如下。也就是说，不管有没有显式定义，任何一个子类都有constructor方法。
        // class ColorPoint extends Point {
        // }
        //
        // // 等同于
        // class ColorPoint extends Point {
        //     constructor(...args) {
        //         super(...args);
        //     }
        // }
    // 另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错。这是因为子类实例的构建，基于父类实例，只有super方法才能调用父类实例。
        // class Point {
        //     constructor(x, y) {
        //         this.x = x;
        //         this.y = y;
        //     }
        // }
        //
        // class ColorPoint extends Point {
        //     constructor(x, y, color) {
        //         this.color = color; // ReferenceError
        //         super(x, y);
        //         this.color = color; // 正确
        //     }
        // }
    // 下面是生成子类实例的代码。
        // let cp = new ColorPoint(25, 8, 'green');
        //
        // cp instanceof ColorPoint // true
        // cp instanceof Point // true

    // 最后，父类的静态方法，也会被子类继承。
        // class A {
        //     static hello() {
        //         console.log('hello world');
        //     }
        // }
        //
        // class B extends A {
        // }
        //
        // B.hello()  // hello world