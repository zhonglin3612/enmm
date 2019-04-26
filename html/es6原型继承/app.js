function a(d) {
    this.name = '1';
    this.constructor = function () {
        console.log('我是函数', d)
    }
}

let b = new a('123')

b.constructor()


class App{
    say(){
        console.log('我是say')
    }
    constructor(a,b){
        console.log("我是constructor")
        console.log('我打印一个：',a);
        console.log('我打印一个：',b);
    }
}

let New = new App('yi','er')

New.say()