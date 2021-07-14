// arrow function expression
// fat arrow

var a = {
  name: "AAA",
  run: function () {
    const run2 = function () {
      console.log("name: ", this.name);
    }.bind(this);
    run2();
  },
};

// a.run();
// trong arrow function nó không có context

var b = {
  foo: "bar",
  run: function () {
    setTimeout(() => {
      console.log(this.foo);
    }, 2000);
  },
};
b.run();
