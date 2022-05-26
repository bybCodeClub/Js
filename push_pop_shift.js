// .push()       .pop()      .shift()         .unshift()



// Push is a way to append data to the end of an array    .push()
// very simply put if you want to add somthing to the end of an array; use the array's variable name with .push()    

var Array_of_names = ["Mitch", "kelly", "doug", "Slime"]
console.log(Array_of_names)

// to add more name to the end of this array, use push


Array_of_names.push("Jimbo","Jaeden","Sarah", ["King Michael","He's not that sexy anyways... okey he kinda is" ] )
console.log(Array_of_names)
// _______________________________________________________________________________________________________________________________________

// .pop()   

//   pop is use to take away /pop off a element from the end of an arrey. You can then store that value/ element within a variable or  
//   request it be returned in some form.
 
let The_truth = Array_of_names.pop()
console.log(Array_of_names)

// This will remove the nested /2D array -- Michael is kind of sexy from the Array_of_names  lol:) 
// _____________________________________________________________________________________________________________________________________________

// .shift()  removes elements from the beginning of the array. It is very similir to pop, 
//  The difference is shift removes a element from the beginning of the array while pop removes from the end

let removed_from_array = Array_of_names.shift()
console.log(Array_of_names)   

// This removed the first element from Array_of_name. 
// Maybe I should use a  loop for array _of_names, so I don't have to keep console.logging the output   
//_________________________________________________________________________________________________________________________________________________


// Unshift give the ability to add elements to the beginning of an array, Similiar to how .push() add element to the end of array's

Array_of_names.unshift("Mitch", ["King Michael", 101, "so cool 3D arrays"])
console.log(Array_of_names)




for(let i = 0; i < Array_of_names.length; i++){
    console.log((car_types[elements]))
}






