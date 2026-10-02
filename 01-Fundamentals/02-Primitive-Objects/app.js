const original = {
  name: "Alice",
};

const copy = original;
console.log(copy.name);

let gerrting = "hello";
let shout = gerrting.toUpperCase();
console.log(shout);
console.log(gerrting);

// 1. Primitive passed to a function
let x = 10;
function change(num) {
  num = 20;
}

change(x);
console.log(x);

//2. Object passed to a function
let user = {
  name: "Akshay",
};

function changeObj(obj) {
  obj.name = "akshay saini";
}

changeObj(user);
console.log(user.name);

let obj1 = {
  name: "first object",
};

let obj2 = obj1;

function obj(name) {
  obj2.name = "second obj";
}

obj(obj1);
console.log(obj1);

let a = 10;
let b = a;

b = 20;

console.log(a); // 10 become its primivite original remains same its immutable

let x1 = { value: 10 };
let y = x1;

y.value = 20;

console.log(x1.value); // 10 becoms we are reaaih n the refernce object

console.log(x1.value);


// mutation
let muName = {
    name:"chaithra"
}

muName.name = "anjali";
console.log(muName);

let arr = [1, 2, 3]
arr.push(4)
console.log(arr);


