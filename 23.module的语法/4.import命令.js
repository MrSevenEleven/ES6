// 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。
    //     // main.js
    //     import {firstName, lastName, year} from './profile.js';
    //
    //     function setName(element) {
    //         element.textContent = firstName + ' ' + lastName;
    //     }
    // 上面代码的import命令，用于加载profile.js文件，并从中输入变量。import命令接受一对大括号，里面指定要从其他模块导入的变量名。
    // 大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

    // 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名。
        // import { lastName as surname } from './profile.js';

    // import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。
        // import {a} from './xxx.js'
        // a = {}; // Syntax Error : 'a' is read-only;
    // 但是，如果a是一个对象，改写a的属性是允许的。
        // import {a} from './xxx.js'
        // a.foo = 'hello'; // 合法操作
    // 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，轻易不要改变它的属性。

    // import后面的from指定模块文件的位置，可以是相对路径，也可以是绝对路径，.js后缀可以省略。
    // 如果只是模块名，不带有路径，那么必须有配置文件，告诉 JavaScript 引擎该模块的位置。

    // 注意，import命令具有提升效果，会提升到整个模块的头部，首先执行。

    // 由于import是静态执行，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。
        // // 报错
        // import { 'f' + 'oo' } from 'my_module';
        //
        // // 报错
        // let module = 'my_module';
        // import { foo } from module;
        //
        // // 报错
        // if (x === 1) {
        // import { foo } from 'module1';
        // } else {
        // import { foo } from 'module2';
        // }
    // 上面三种写法都会报错，因为它们用到了表达式、变量和if结构。在静态分析阶段，这些语法都是没法得到值的。

    // 最后，import语句会执行所加载的模块，因此可以有下面的写法。
            // import 'lodash';
        // 上面代码仅仅执行lodash模块，但是不输入任何值。