// this is a simple object constructor, this is like the blue print to create multiple other objects based on this function/ constructor
function car(brand, engine, year,) {
    this.brand = brand
    this.engine = engine
    this.year = year
}

fun_car = new car("Tesla", "V-6", 2021)

work_car = new car("Chevy", "V-8", 2005)

dream_car = new car("BMW", "V-12 electric", 2022)

// to call any of the values, within these object you simply need to

console.log(fun_car.brand)

console.log(dream_car)    // this should give you all the information about this dream car object


// object prototype:  if you wanted to add a attribute to all of the car objects without adding that attribute to all of the individual objects, 
// you can use a object prototype for that.
car.prototype.locks = "automatic"

car.prototype.transmission  = "Auto"

console.log(work_car)

// The objects prototype is an excellent place to put methods/ functions that will be in most if not all of the object instances.

car.prototype.describe = function() {
    document.write("This amazing car has the current features");
    document.write(`its a ${this.brand} with a ${this.engine} and was made in ${this.year}, so buy now`);
}

// changing dream cars transmission  prototype to manual.
dream_car.transmission  = "manual"

console.log(`The transmission on you dream car is ${dream_car.transmission}, While the tranny on you work car is ${work_car.transmission} `)

console.log(dream_car.engine, fun_car.year, )
//_____________________________________________________________________________________________________________________________________________________________

// This is another way to create object in javascript.
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

//___________________________________________________________________________________________________________________________________________



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
//________________________________________________________________________________________________________________________________________



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




