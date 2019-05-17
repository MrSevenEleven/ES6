// 模块功能主要由两个命令构成：export和import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

// 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
        // // profile.js
        // export var firstName = 'Michael';
        // export var lastName = 'Jackson';
        // export var year = 1958;
    // 另一种写法
        // // profile.js
        // var firstName = 'Michael';
        // var lastName = 'Jackson';
        // var year = 1958;
        //
        // export {firstName, lastName, year};

// export命令除了输出变量，还可以输出函数或类（class）。
    // export function multiply(x, y) {
    //     return x * y;
    // };
    // 或
    // export{multiply};

// 通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。
    //     function v1() { ... }
    //     function v2() { ... }
    //
    //     export {
    //         v1 as streamV1,
    //         v2 as streamV2,
    //         v2 as streamLatestVersion
    //     };

// 需要特别注意的是，export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
// 另外，export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
        // export var foo = 'bar';
        // setTimeout(() => foo = 'baz', 500);
    // 上面代码输出变量foo，值为bar，500 毫秒之后变成baz。

// 最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错