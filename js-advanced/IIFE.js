let fullName = "";

(function () {
  console.log("IIFE");
})();
//ví dụ
const app = (function () {
//private
  const  cars = []
  return {
    get(index) {
        return cars[index]
    },
    getAll() {
        return cars
    },
    add(car) {
     cars.push(car);
    },
    edit(index, car) {
      cars[index] = car;
    },
    delete(index) {
      cars.splice(index, 1);
    },
  };
})();
console.log(app.getAll());
app.add("BMW");
app.add("MEC");
app.cars = null
console.log(app.getAll());
