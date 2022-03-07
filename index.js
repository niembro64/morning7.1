// variables
var varboy = "varboy"
let letboy = "letboy"
const constboy = "constboy"

function doThing(){
    var varfun = "varfun";
    let letfun = "letfun";
    const constfun = "constfun";
}
doThing();

// destructuring
const faveFlavors = [
    "one", "two", "three"
]
const[a,b,c] = faveFlavors;
console.log(b);