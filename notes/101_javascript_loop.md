## FOR LOOPS

for (initialization; condition; final expression) {
    // code to be executed
}

TRY TO AVOID REPEATING CODE
*** DRY *** : Don't Repeate Yourself

When we need to go through each element of an array



when loop through an array usually starts at zero

      // Creating an array of vegetables.
      var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

      // Looping through each item in the array and logging a message to the console.
      for (var i = 0; i < vegetables.length; i++) {
        console.log(i)
        console.log("I love " + vegetables[i]);
      }
*** i = 0 *** Iterator
*** i < vegetables.length *** Condition
*** i++ *** Increment

  *** for *** starts loop
      // anything inside paraentheses is setting up how this loop is going to work
      // for(where loop starts; how far through loop do we to go; how are we going to increment i when going through loop)


*** charAT ***
*** .toLowerCase ***

Look at differnt ways to create the Hard Loop and grab the first letter of the strings in an array
Practice folder - Hard Loop

*** RANDOM NUMBERS ***

basic function we get in JavaScript
`Math.random()`- generate random number between 0 and 1 

get random number between 1 and 10
var = num = Math.floor(Math.random() * 10) + 1; 



