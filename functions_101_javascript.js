 

//  Getting started with javascript functions. Below are two very simple function scripts written in Javascript. //

// write a function that request a user provide their name and age then prints it out via the web browser // 


function the_function_name(user_name , user_age) {
     
    var user_name = window.prompt(" Please enter your fisrt name") ;

    var user_age = window.prompt(" How old are you? ") ;

    document.write(` Hello there ${user_name} you are ${user_age} years old` ) ;

}


/* # Exercise 1 : create a function that checks two numbers and returnes true if one of the numbers is 100
#                  or if the sum of the two numbers is 100.  

*/

function keepin_it_100(num1, num2) {


    if (num1 === 100 || num2 === 100) {
        return true ;
    }
    else if (num1 + num2 == 100) {
        return true ;
    }
    else {
        return false ;
    }
    
}

document.write(keepin_it_100(100, 5))
document.write(keepin_it_100(5, 100))

document.write(keepin_it_100(5, 3))
document.write(keepin_it_100(55, 303))

document.write(keepin_it_100(50, 50))
document.write(keepin_it_100(75, 25))


