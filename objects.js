// Object in javascript

/*  An object in javascript is a data structure similir to an array, it can store data /info about an item or a real life object.
    you can also access the data in a object through, what is called properties.
    
    There are two main way to create objects in javascript:  Examples
    */    


// 1st way to create an object 
let my_dog = {
    name: "spot",       //  these are called function properties
    gender: "female",   
    fur_colour: "brown",  
    age: 8,
    legs: 4,
    friends: ["tucker", "maxie", "Thugz-zilla" ],  // you can even use arrays as a function properity 

    speak: function speak() {          // an object method. or putting a function or functionality within a object
        return (" bark, bark, ") },    // rembmber you can use any function as a method, even global ones written outside the object or class
    
    goes_pee: function washroom() {
        return ("lift up leg to go pee")
    }    
    
}   



// 2nd way 
let object_name = new Object() 



// accessing the data / properties within the object data structure
console.log(my_dog.name)    // this uses dot notation which means the object's variable name follow by a dot, then the property's name.

console.log(my_dog[gender]) // Bracket notation, similar to dot nataion, but this can work with strings / object propertie names with spaces.


my_dog.prototype.tails = "One tail"  // this line of code set all the tail properties within this object to "one tail"

window.alert()
