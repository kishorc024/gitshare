let vehicles = ["Elantra", "WagNor", "XUV"];

let elantra = vehicles[0];
console.log(elantra);

function calculate(a,b)
{
    let add = a+b;
    let sub = a-b;
    let mul = a*b;
    let div = a/b;
    return [add,sub,mul,div];
}
let result  = calculate(20,10)
console.log(result);