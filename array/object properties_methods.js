// Array properties and methods in Javascript 

/*  
Array methods and properties: A great place to find out more about array methods and their uses is :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

In computer science, the term property can refer to somthing that describes or gives a discription of an object or array.
For example  lets list some the properties of a car:  Model, year, colour, milies, wither its a 2 or 4 door vehicle 
             properties of a shoes : make /company, size, colour, 
properties are a way of describing an object in CS, and yes arrays are objects in scripting / programming languages.             

And Methods are ways to interact with / manupilate arrays to do certain actions.     
So there are sevral lots of methods you can use to manuplate this array, so lets play around with a few. 



/*
   this is another way to write and array with objects and their prices, The syntax is pretty simple 
   First you start the array like any other: then you add [brackets,push enter to space out]  
   within those brackets use {curly braces} to put your elements / objects inside.
   inside the {} you can name your element/ object and give multiple features. Don't forget the , especially at the of each {}, 
*/
var items = [
    {name: "bike",  price: 100},
    {name: "T.V",   price: 200},
    {name: "Album", price: 15},
    {name: "Album", price: 15},
    {name: "books", price: 30},
    {name: "phone", price: 500},
    {name: "drums", price: 250},
];

items.forEach(function(elements_in_list,index_number, array_itself) {
    console.log(elements_in_list, index_number, array_itself)

    // return (here is where you can request returned or assign varibles)
})


// forEach is another way to loop through an array without returning on output unless specified.
// without the forEach method you'd most likely have to write a loop in order to iterate/ go through each element within a array

// the function used in this example is know as a callback function or (a function passed as an argument)
// with most array methods there are basically 3 things you can pass into the function
// if you want to access individual items, thats the 1st argument
// if you want the index number thats the second argument.  
// and if you want the full array show every iteration then that the 3rd argument.




const newAccounts = [
    {first_name: "Doug ", last_name: "diggy",   age: 25, status: "neck deep in pussy"},
    {first_name: "Chad ", last_name: "mclovin", age: 33, status: "Haven't been in couchie since the day I came out one"},
    {first_name: "Ashley ", last_name: "Madison", age: 27, status: "Broke dudes make me sick"},
    {first_name: "clarence", last_name: "green", age: 41, status: "Certifed OG"},
    {first_name: "Kim", last_name: "Williams", age: 33, status: "virgin"}

] ;


// The .Filter() method 
// very similir to how forEach() help to iterate through an array, the .filter() can filter an array without the need for a loop




const is_over_30 = newAccounts.filter(function(newAccounts) {
    if(newAccounts.age > 30) {
        return (newAccounts.first_name, newAccounts.last_name);
    }
})

console.log(is_over_30);


/* 
In order to see all the array methods and how to implament them properly visit
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
*/
