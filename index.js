// variables
var varboy = "varboy"
let letboy = "letboy"
const constboy = "constboy"

function doThing(){
    var varfun = "varfun";
    let letfun = "letfun";
    const constfun = "constfun";
    console.log("INSIDE DOTHING()")
}
doThing();

// destructuring
const faveFlavors = [
    "one", "two", "three", "four"
]
const[a,b,c] = faveFlavors;
console.log(b);

const sundae = {
    flavor: "vanilla",
    sauce: "hot fudge",
    toppings : ["pecans", "rainbow", "chocolate"]
}

const {toppings} = sundae;
toppings[0] = "peanuts";
console.log(toppings);
console.log(sundae);

// rest and spread

const[first, ...others] = faveFlavors;
console.log(others);

const newList = ["hot cheeto", ...faveFlavors];
console.log(newList);

const {flavor, ...fixings} = sundae;
console.log(fixings);

const superChocoloatey = {
    flavor: "chocolate",
    ...fixings
}
console.log(superChocoloatey);

// arrow functions

console.log(doThing);
const otherFunc = doThing;
otherFunc();

function runThing(func){
    func();
}

runThing(doThing);
runThing(()=>{
    var heyThere = "hey There";
    for (var i = 0; i < 10; i++){
        console.log(heyThere + " " + i);
    }
})

const countVeryHigh = () => {
    for (var i = 0; i < 5; i++){
        console.log(i);
    }
}

countVeryHigh();