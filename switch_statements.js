// Switch statements in Javascript

/*  swtich statements can be used as another / alternative way to allow choice in a code base.
    It usually starts off by checking a variable or function to see if a condition is true, 
    and will excute certain code if it is. else / default other code if its false.

    The basic syntax for a switch statement is as follows : 
    First use the switch statement with a variable or function name with ()
    Then use keyword case: to check for a condition or a true or false statement... followed a by : "semicolon"
    then if the condition is true, here is where you'll type in the code to be excuted.
    lastly finish each code block with a break   
*/

var User_name = prompt("What yo name iz") ;

    switch(User_name) {
        case "Mitch Coner":
            document.write("We've been waiting for your sweet and sour chicken ass");
            break    

        case "Bobby Hill":
            document.write("go on women, get me my dinner")
            break  
        
        case "Michael Hamilton":
            document.write("You are the GOAT (greatest of all time)") 
            break   

        default:
            document.write("Your really not all that importain, Take a hike!")
            break
}


// this is the most basic syntax, when it comes to switch statements. 


// if you want to add together or bundle case's together, that is allowed: by doing that you can have 
// one output for multiple lines of code for example : 

/* Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High     */



function sequentialSizes(val) {

    let answer = "";
  
  switch(val) {
    case 1: 1
    case 2: 2
    case 3: 3
  
     return  "Low"
     break
  
    case 4: 4
    case 5: 5
    case 6: 6
  
     return "Mid"
     break     
  
    case 7: 7
    case 8: 8
    case 9: 9
  
      return "High"
      break
  
    default:
        return "your an idiot"  
    }​
}
// Here is a simple excerise, where you switch the if / else if statements into switch logic to see the difference. 
// Change the chained if/else if statements into a switch statement.

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    if (val === "bob") {
      answer = "Marley";
    } else if (val === 42) {
      answer = "The Answer";
    } else if (val === 1) {
      answer = "There is no #1";
    } else if (val === 99) {
      answer = "Missed me by this much!";
    } else if (val === 7) {
      answer = "Ate Nine";
    }
  
    return answer;
  }

  chainToSwitch(7);

//   Here is where the if / else statements are changed into a switch statements 

function chainToSwitch(val) {

    let answer = "";

  switch(val) {
    case "bob":
    answer = "Marley" 
    break
    
    case 42:
    answer = "The Answer";
    break
  
    case 1:
    answer = "There is no #1";
    break
  
    case 99:
    answer = "Missed me by this much!";
    break
  
    case 7:
    answer =  "Ate Nine";
    break
  
    case "John":
    answer = " "
    break
  
    case 156:
    answer = " "
    break
  
    default:
    return "Kiss my ass Christan"  
  } 
  return answer;
  }
  
chainToSwitch(7);  