let fruits = ["Apple","Banana", "Guava"];

//let fruit = new Array("Apple","Banana", "Guava");
// for(let i =0;i<fruits.length;i++)
// {
//     console.log(fruits[i]); 
// }

// fruits.forEach(element =>{
//  console.log(element);
// });

// fruits.map((item)=>{
//     console.log(item);
// })

let numbers = [1,2,3,4,5];

let squares = numbers.map((item)=>{
    return item * item;
});
console.log(squares);