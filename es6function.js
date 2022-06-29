//regular function
function add(no1, no2){
    let addition = no1 + no2;

    console.log("addition is : " +addition);
}
//Assigning function to variable
let sub = function(no1, no2)
{
    let sub = no1 - no2;
    console.log("Subtraction is : "+sub);
}

// Arrow function

let mul = (no1, no2) =>{
    let mul = no1 * no2;
    console.log("Multiplication is  : "+mul);

}

//

add(10,5); 
sub(10,5);
mul(10,5);