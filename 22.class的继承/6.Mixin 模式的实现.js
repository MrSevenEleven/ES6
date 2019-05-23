// Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。它的最简单实现如下。
        // const a = {
        //     a: 'a'
        // };
        // const b = {
        //     b: 'b'
        // };
        // const c = {...a, ...b}; // {a: 'a', b: 'b'}
    // 上面代码中，c对象是a对象和b对象的合成，具有两者的接口。
    // 下面是一个更完备的实现，将多个类的接口“混入”（mix in）另一个类。

class A{
    constructor(){
        this.name="aa"
    }
    getname_A(){
        console.log("aa");
    }
}
const b={
    height:"bb"
};
class C{
    constructor(){
        this.phone="cc"
    }
    getname_C(){
        console.log("cc");
    }
}
const a=new A();
const c=new C();

const all={...a,...b,...c};
console.log(all);//{name: "aa", height: "bb", phone: "cc"}

