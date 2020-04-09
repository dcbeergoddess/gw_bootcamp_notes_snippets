var number = ["0", "1", "2","3","4","5","6","7","8","9"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialCharacters = ["!","@","#","$","%","^","&","(",")","-","_","+","=","|",";",":"];

//backslash "\"" does not work as character in array
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",";",":","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];


// intial for loop, all you would change is the array vegethables.length

      // Creating an array of vegetables.
      var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

      // Looping through each item in the array and logging a message to the console.
      for (var i = 0; i < vegetables.length; i++) {
        // each time we go through loop we are doing the following
        console.log(i)
        // i will always equal the index
        console.log("I love " + vegetables[i]);
        // first time through i will equal 0
        // next time i will equal 1
        // next time i will equal 2
        // etc.
        // can add twenty more items to array and this code will stil work!!!
         }
// //       *** i = 0 *** Iterator
// // *** i < vegetables.length  Condition
// *** i++ *** Increment

//   *** for *** starts loop
      // anything inside paraentheses is setting up how this loop is going to work
      // for(where loop starts; how far through loop do we to go; how are we going to increment i when going through loop) 
//////////////////////////////////////////

// Math.Random

// Loop 10 times
for (var i = 0; i < 10; i++) {

      // Gary snippet to generate random number between 1 and 3 with no decimal
      var max = 3;
      var min = 1;
      var num = Math.floor(Math.random() * (max - min + 1) + min);

      // Display in console
      console.log(num);
    }
/////////////////////////////////////////Empty Array
  // create empty array
    // if you did arr.length = 0
    var arr = [];
    // loop goes from 1-10
    for( var i = 1; i <=10; i++){
      //push element into array, automatically gets put at end of array
      arr.push(i);
    }
    arr [-1] = "gary"

    console.log(arr);

    //Key Value Pair above

    //Switch Statements below////////////////Switch
    //in switch put different options with cases
    //like if/else statements
    //need break statements at the end of each case, otherwise will fall into case below it
    

    var studentName = "gary";
    switch (studentName){
      case "gary":
        console.log("This dude deserves an A")
        break;

      case "dan":
        console.log("This dude deserves a B+");
        break;

      case "erik":
        console.log("This dude deserve a B+")
        break; 
// catch all 
      default:
        console.log("someone else");    
    }  