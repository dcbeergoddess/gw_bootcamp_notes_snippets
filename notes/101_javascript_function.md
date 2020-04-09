## Functions

- Functions help us take repetative code
  - put it into one place
    - and keep calling that repetative code everytime we need it

- if you create a bunch of arrays you can call (run) all those arrays with a function that loops through all the arrays
- whatever you console log first will appear first in the dev console
*** look at html file to see an example of the superhero logging ***


- give us a way of not having to repeate code

Number of different ways to declare a function in JavaScript

>>> Most common way

function nameOfFunction() {

}

nameOfFunction and then opena and close parentheses. not always someting in the parentheses but always open and close parenthese. 

inside () is the ***argument*** can have more than one arguement in a function, just seperate with comma, variables in parentheses only apply to what is in the function itself. refer to whatever data is being passed in. name aruguements whatever you want to name them. just make sure you refer to it by the same variable name within the function itself

can pass in different data types into a function

- deals with same thing over and over again but deals with different information



function adder(x, y, z){
        console.log(x + y + z);
      }
x, y, z are variables that are placeholders for whatever data gets passed into this function
passing in numbers so JavaScript knows to add these up

*** typeof ***

typeof argument - asking JavaScript what data type is a given variable. 

function isString(x, y, z) {

        // isString checks if each argument is a string using typeof.

        // If each argument is a string it will note that.
        if (typeof x === "string" && typeof y === "string" && typeof z === "string") {
          console.log("Yep. They are all strings");
        }

        // If anyone of them is NOT a string... it will note that.
        else {
          console.log("No... I don't believe these are strings.");
        }
      }

*** return ***

- when you call a function sometimes is does all the work. when you want to get the result so you can apply it to something else

function adderReturn(x, y, z){
  return x + y + z;
}
- not doing log just returning back result to wherever this function was called rom
- once I get anwser back I can decide what to do with it

var result = adderReturn(1, 2, 3);
console.log(result)

might need to take that number and put it somewhere else


>>>Could also do this

function adderReturn(x, y, z){
  var result = x + y + z
  console.log(result)
  return (result)
}

## CALLING FUNCTIONS

You can make a function and then call it into another function

Write Function out first and call function out later on
JavaScript reads whole page before rendering





