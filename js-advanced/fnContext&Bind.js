// global context
// function context
// bind

const mouse= {
    name : 'mickey',
    sayHi: function() {
        console.log("Hi , my name is: "+ this.name);
    },
}

const cat= {
    name : 'tom',
}
// mouse.sayHi()


var say = mouse.sayHi
say()