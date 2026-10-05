// 🔥 Today's practice session
// You learned:
// 1. Primitives
// 2. Primitives vs Objects
// 3. Mutation vs Reassignment
// 4. Type Coercion
// 5. == vs ===
// 6. null vs undefined
// 7. Basic React/JSX concepts

// 🧠 Round 1 — Predict the output
// 1. Primitive copy

let a = 10; 
let b = a;
// assigning value to b ok
// here i forgot tht word bro 
b = 20; // here we are reassigng the value to b so it will print 20

console.log(a); // 10
console.log(b);// 20


//2. Object reference
let user1 = {
    name :"a"
}

let user2 = user1;

user2.name = "B";
console.log(user1);
console.log(user2);

// here user2 to has same referce and we arev reassiging the vale the name so it prints b 

