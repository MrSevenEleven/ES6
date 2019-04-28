// ES6 的块级作用域
    // let实际上为 JavaScript 新增了块级作用域。
        function f1() {
            let n = 5;
            if (true) {
                let n = 10;
            }
            console.log(n); // 5
        }
        f1();
        // 外层代码块不受内层代码块的影响。如果两次都使用var定义变量n，最后输出的值才是 10。

    // ES6 允许块级作用域的任意嵌套。
        {{{{
            {let insane = 'Hello World'}
            // console.log(insane); // 报错
        }}}};
        // 每一层都是一个单独的作用域。第四层作用域无法读取第五层作用域的内部变量。

    // 内层作用域可以定义外层作用域的同名变量。
        {{{{
            let insane = 'Hello World';
            {let insane = 'Hello World'}
        }}}};

// 块级作用域与函数声明
    // 考虑到环境导致的行为差异太大，应该避免在块级作用域内声明函数。如果确实需要，也应该写成函数表达式，而不是函数声明语句。













