### General Notes and Tidbits


**JavaScript won't do anything unless you tell it too
**ALWAYS Have DEV CONSOLE open when working with JavaScript

Put a ; at the end of each line or statement
      - used to be a very big deal, not as much anymore but get in habit for anything in the browser with a semi-colon 

      var name = "Rachel Murray";

Naming Variables with multiple words. Use camelCasing. NO SPACES, NO DASHES (Javascript thinks it's a minus). Underscores ok but camelCasing more frequent
Spaces between equal signs option but makes code look cleaner

       var pizzaCount = 10;

*** Recommendation *** Try to declare all variables at beginning of code when you can 
If you declare a variable that depends on another varialbe you have to declare variable first. I.e var total cost below.


*** Alerts *** Browser specfic command, not used as much anymore

Variables are placeholder for values when we don't always know what the value will be

*** concatenataion *** joining of strings together

*** Hard Coded *** 
var pizzaCount = 10;
var totalCost = pizzaCount * 5.00;

alert("Pizza's cost $5 each);

*** Dynamic ***
var pizzaCount = 10;
pizzaCost = 5.00
var totalCost = pizzaCount * pizzaCost;

alert("Pizza's cost $" + pizzaCost + " each")

>>>May start off with something hard coded at first and then realize it may get changed later. Variables give you a lot more flexibility

### JavaScript Console

The <<<< console.log()>>>> method is used to display data in the browser's console.

Can use as many console.log() statements as you want!!!
      
      var quick = "Fox";
      var slow = "Turtle";
      var numbers = 121; 

    We can log strings, variables, and even equations.  
      
      console.log("Teacher");
      console.log(quick);
      console.log(slow);
      console.log(numbers + 15);

    This is what you will see in the DEV CONSOLE

      Teacher
      Fox
      Turtle
      136
    
### console.log()
- console is the name of an object we have availalbe to us
- log is an operation that we want to perform inside that object
- dot notation in JavaScript


*** Alerts vs Prompts/Confirm ***

>>>Alerts: just a statemnet that you are showing to user. they don't interact with it at all. can use like console.log to check that you are getting correct values

>>>>Confirm: Way of asking a user a question and they can either say yes or no (ok or cancel)
      - Whatever anwser they choose is stored in the variable
        var doYouRock = confirm("The question is, do you rock?");

>>>>Prompt: allow user to enter in something
      - when user types in you assign a variable to that
      - even if you type number JavaScript will treat it as a string
      - can convert it

        var howMuchRock = prompt("How much do you rock?);

    Can alert the responses
        alert(doYouRock);
        alert(howMuchRock);


*** Conditionals ***

Each statement is composed of an if, else-if, or else (keyword), a condition, and the resulting code in curly brackets { }.

can have as many else if statements but only one else statement

 - put condition in parentheses that we are evaluating 
- If we simply want to know if variable is true put it in parentheses by itself 
- Or use operator
    - === | full absolute comparison, get used to using this
    - Other programming languages won’t let you compare different data types like JavaScript

- Where tell JavaScript based on one set of circumstances to do one thing, and based on another set of circumstances to do something else
- if/else statements is an example
- there are others

- make sure code behaves differently based on a set of circumstances

>>> if confirmSuchi is true. don't need to put anthing else in the parentheses since it's true or falso but essentiall means. if(confirmSushi === true), JavaScript knows if you only put the variable in there you are looking for a true or false value
            if(confirmSushi){
              alert()
              }

            if(!confirmSushi){

              } *** ! means false *** do whatever you put in bracket

use else if you want to evalute more than just true or false, othewise can just be if then else

*** = vs == vs === ***
    = : is assignment
    == : is equivalence (comparison) only cares about value
    === : is strict equivalence (comparison) also compares if two elements are same data type

determining wether or not they are equal. get used to using ===

"gary" =+ "gary" *** true if evaluate out becuase have same value ***

1 == 1 *** true ***
1 === 1 *** true ***
1 === "1" *** false : value is same, but two different data type, one is number and one is string ***

true == "true" *** true because same value ***
true === "true *** false because not same data type, first boolean, second string ***

>>> Best practice to use === 

*** Comparison Operator ***

if (var1 !== var2 ) //If item on left does NOT equal item on right

== compare values before and after it
> === compare value and data type 
!== determining whether or not two things are not equal to each other both in value and data 
!= only values

>= greater than or equal too
<= less than or equal too

compare two sets of conditional statements
&& : if both need to return true (i.e everything in statement needs to be true)
|| : if one thing is true or another thing is true

*** Change string variable to number ***

parseInt(variable)






















