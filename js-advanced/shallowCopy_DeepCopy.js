/*Sallow Copy And DeepCopy */

let b = {
  myName: "Duy",
  address: {
    city: "Đà Nẵng",
  },
};

// Deep Copy
// let b1 = Object.assign({}, b);
// để fix object lồng
let b1 = JSON.parse(JSON.stringify(b));
b1.myName = "Kin";
// object lồng sẽ bị cạm bậy
b1.address.city = "Quãng Nam";
console.log("b1 : ", b1);
console.log("b : ", b);

// hạn chế của deep copy bằng json
// các thuộc tính Nan, undefined sẽ mất đi

console.log(
  JSON.parse(
    JSON.stringify({
      a: new Date(),
      b: NaN,
      c: new Function(),
      d: undefined,
      e: function () {},
      f: Number,
      g: false,
      h: Infinity,
    })
  )
);
