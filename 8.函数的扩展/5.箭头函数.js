// 基本用法
    //     var f = v => v;
    //
    //     // 等同于
    //     var f = function (v) {
    //         return v;
    //     };

    // 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
    // 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。
    // 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

    // // 报错
    // let getTempItem = id => { id: id, name: "Temp" };
    // // 不报错
    // let getTempItem = id => ({ id: id, name: "Temp" });

    // 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
    // 箭头函数可以与变量解构结合使用。

    // 箭头函数的一个用处是简化回调函数。
        // // 正常函数写法
        // [1,2,3].map(function (x) {
        //     return x * x;
        // });
        //
        // // 箭头函数写法
        // [1,2,3].map(x => x * x);

// 使用注意点
    // （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    // （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    // （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    // （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

    // 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。
        function foo() {
            setTimeout(() => {
                console.log('id:', this.id);
            }, 100);
        };
        var id = 21;
        foo.call({ id: 42 });// id: 42
    // 上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。
    // 如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。

    // this指向的固定化，并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，导致内部的this就是外层代码块的this。
    // 正是因为它没有this，所以也就不能用作构造函数。
    // 所以，箭头函数转成 ES5 的代码如下。
    //     // ES6
    //     function foo() {
    //         setTimeout(() => {
    //             console.log('id:', this.id);
    //         }, 100);
    //     }
    //     // ES5
    //     function foo() {
    //         var _this = this;
    //
    //         setTimeout(function () {
    //             console.log('id:', _this.id);
    //         }, 100);
    //     }

    // 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。
    // 另外，由于箭头函数没有自己的this，所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向。

// 不适用场合
    // 由于箭头函数使得this从“动态”变成“静态”，下面两个场合不应该使用箭头函数。
    // 第一个场合是定义对象的方法，且该方法内部包括this。
        const cat = {
            lives: 9,
            jumps: () => {
                this.lives--;
            },
            runs:function(){
                this.lives--
            }
        };
        cat.jumps();
        console.log(cat.lives);//9
        cat.runs();
        console.log(cat.lives);//8
    // 第二个场合是需要动态this的时候，也不应使用箭头函数。
        // var button = document.getElementById('press');
        // button.addEventListener('click', () => {
        //     this.classList.toggle('on');
        // });
    // 上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象。

// 嵌套的箭头函数
    // 箭头函数内部，还可以再使用箭头函数。
    // 箭头函数还有一个功能，就是可以很方便地改写 λ 演算。