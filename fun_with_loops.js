// let get loopy

const myArray = []
let i = 0;

while(i <= 5) {
    myArray.push(i);
    i++
}


// using the for each method to display the elements within an array.

myArray.forEach(element => {
    console.log(element)
})

// add up all the elements/ numbers within this array, and calculate their sum.

const numz = [3,5,7,8,9,23,56,768,234,6]
let total = 0 

// using a for loop to do it.
for( let i = 0; i < numz.length; i++) {
    total += myArray[i];
}




// extra content..   The reduce()  method,    better then using a for loop to calculate array elements.



let sum = numz.reduce((accumulator, array_element) => {
    console.log(`accumulator: ${accumulator}, |||  number: ${array_element}`)
    return accumulator + array_element
}, 0)     // initilizing this method with , 0 )



 // the accumulator is the net result, the answer your looking for, this is the return value you'll need to request. remember its number changes each iteration
// and the array_element is just the element within the array.   
// The Syntax is kinda weird. just don't forget to initilize this method at the end.




console.log(accumulator)