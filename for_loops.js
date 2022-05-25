//    Intro into looping 

// 1st excerise:   print out number 1 - 10 in the console in order      
// HERE'S HOW to dit it.. WITHOUT LOOPS


console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log("==========================================================================") // visible line break between the two methods


//  Now here how with a for loop 


for(let counter= 0; counter < 25; counter++) {
    console.log("new count is " + counter)

     if( counter >25) {
         window.alert(" the number to high dummy")
         break;
     } 

}

/*   
this loop is basically saying that ;  as long as counter is under 25 keep printing new count + counter 

1st :  we initialize the loop by saying:   let the_variable counter = a number   "0"
                                                let i = 0;
2nd :  setting the condition, which in this case is saying , if counter is under 25 keep looping
                                               i < 5 ;							
3rd : Lastly were going to add 1 to counter every time it loops, remember i++ mean (the_loop_variable + 1)
                                               i++ ; 																

Lastly you can add if statements and logic to loops as well    */





//  2nd excerise: add up all the number from 1 to 10 using a for loop :


var sum = 0; 

for( var numbers = 0; numbers <= 10; numbers++) {
    sum = sum + numbers                         // here were storing and adding each iteration of the loop into the sum variable.
}


console.log(`the total is ${sum}`)

// Here the for loop set up to count up to 10, At first I thought we need to add number to number (the old iteration to the next and put that in a variable
// but thankfully found a easier way. by creating a empty variable outside the loop, then concatinating the two variables together. 
