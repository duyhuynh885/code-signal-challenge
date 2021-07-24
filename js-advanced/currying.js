var add = function (a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
};

// console.log(add(2)(3)(4)); //output 9
// console.log(add(3)(4)(5)); //output 12

// Tại sao Currying lại quan trọng
const movies = [
  {
    id: 1,
    name: "Matrix",
  },
  {
    id: 2,
    name: "Star Wars",
  },
  {
    id: 3,
    name: "The wolf of Wall Street",
  },
];
const series = [
  {
    id: 4,
    name: "South Park",
  },
  {
    id: 5,
    name: "The Simpsons",
  },
  {
    id: 6,
    name: "The Big Bang Theory",
  },
];
// console.log(movies.map((movie) => movie.id));
// console.log(series.map((serie) => serie.id));
// const get = (property) => (object) => object[property];
function get(property) {
  return function (object) {
    return object[property];
  };
}
const getId = get("id");
const getName = get("name");

console.log(movies.map(getId));
console.log(movies.map(getName));
