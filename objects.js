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

// ___________________________________________________________________________________________________________________________________

// Modifying object in Javascript 

// To access an object property there are two ways .notation  and [bracket notation]

const This_Person_object = {
    Handsome: true,
    rich: "very true",
    smrt: " Well 2 out of 3 isn't bad",
    age:   25
} ;  

//  now to access some of the properties within this object you can use .notation
 
console.log(This_Person_object.Handsome)   // use the object name follow by a .   
console.log(This_Person_object.rich) 


// this is how you can add elements to an object 
This_Person_object.your_Sex = "yes Please"     
console.log(This_Person_object.your_Sex)

This_Person_object.name = "Mike"


// To delete a property from an object 

delete This_Person_object.smrt

console.log(This_Person_object.smrt)   // you should get undifined , as it been deleted.


// updating property info within a object 

This_Person_object.name = Michael


document.getElement  
