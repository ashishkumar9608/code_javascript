// primitive 
// 7 type : string , number, boolean, null , undefined, symbol, BigInt

// Reference (Non Primitive)
// Array, objects, Functions

const arr = ["ashish","name"]

let myobj = {
    name:"ashish",
    age:22,
}

const myfunction = function(){
    console.log("Hello Ashish");
}

// stack (primitive), Heap (Non - primitive)

let name = "Ashish";

let anothername = "AshishKumar";


//******** Heap *********
let userone = {
    email:"ashish@gmail.com"
};

let usertwo = userone;
usertwo.email = "ashish@iitroorkee";
console.log(usertwo.email);
console.log(userone.email);