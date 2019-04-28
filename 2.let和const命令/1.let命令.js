// 基本用法
    // 用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
        {
            let a = 10;
            var b = 1;
        }
        // console.log(a); // a is not defined.
        // console.log(b); // 1

    // for循环的计数器，就很合适使用let命令。
        const a=[];
        for(let i=0;i<10;i++){//变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
            a[i]=function(){
                console.log(i);
            }
        }
        a[5]();//5

        var b=[];
        for(var j=0;j<10;j++){
            b[j]=function(){
                console.log(j);
            }
        }
        b[5]();//10

// 不存在变量提升
    // var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。
    // let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

    // var 的情况
    console.log(foo); // 输出undefined
    var foo = 2;

    // let 的情况
    // console.log(bar); // 报错ReferenceError:bar is not defined
    let bar = 2;

// 暂时性死区
    var tmp = 123;
    if (true) {
        // tmp = 'abc'; // ReferenceError:tmp is not defined
        // let tmp;
    }
    // 上面代码中，存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。

    // ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。
    // 总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。这在语法上，称为“暂时性死区”(TDZ)。


    // “暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
    //     typeof x; // ReferenceError
    //     let x;
    // 作为比较，如果一个变量根本没有被声明，使用typeof反而不会报错。
    // typeof undeclared_variable // "undefined"


// 不允许重复声明
    // let不允许在相同作用域内，重复声明同一个变量。
        // 报错
        // function func() {
        //     let a = 10;
        //     var a = 1;
        // }

        // 报错
        // function func() {
        //     let a = 10;
        //     let a = 1;
        // }








