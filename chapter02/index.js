/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return (3*2) ;

};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  2 + 2;

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  // Write a statement that declares a variable.

   var six = 6;

};

// Variables 2
Exer.variables2 = function () {

  // Write a statement that declares a variable.

  // Write a statement to assign a number value to your variable.

  var story ;
  
  story = 6 ;

  return story ;
  
  

};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.

  var story = "6"; 

  return "story"
};

// Variables 4
Exer.variables4 = function ( n ) {

  return n ;

};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.

  var book = n ;

  return book;
};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)

  // Stacy gives you more apples
  // (the parameter `stacys`)

  // Return the total number of apples you have.

  var apples = (3, stacys);

  return 3 + stacys ;

};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.
  change = 0.25 + change ;

  // Then you spend a dime on old fashioned candy.
  change = change - 0.10;

  // How much money do you have now?

  // Use type coercion to turn your pocket change into a string add a dollar
  change = "$" + change;
  // sign to the beginning.

  // Return that string.

  return change;

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.

Exer.keywords1 = function ( blue, two ) {
  var pink = 2;
  var boss = two+2;
  blue += "2";
  var foo = pink + boss + blue + two;
  return foo
};


/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
  return browser;
  //return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  setPowerLevel(11000, 12000) ;

  cornTortilla("chicken", "queso", "bacon", "lime") ;

  recombobulate () ;

};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  var x = 20
  console.log ("value of x is", x);

};
// Console 2
Exer.console2 = function ( printme ) {

  console.log(printme);

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  console.log('The magic word is "'+ data +'"');

};

// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.

  console.log(20,30)

};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.

  // Make the function return the parameter `y` plus 1.

  console.log(x);

  return y + 1;  

};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  console.log(magicFunc())

};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  return magicFunc();

};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.

  // Return that same result with "123" concatenated to the end.

  var z =(strShift("abczABCZ"));
  
  console.log(z)

  return z + "123";

};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {

  console.log(magicFunc()+""+magicFunc());

  

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  // Declare and initialize a variable for the first string.

  // Declare and initialize a variable for the second string.

  // A return statement.

  var z = strShift("abcABC123!@#") ;

  var q = strShift(strShift("a S d F j K l")) ;

  return strShuffle(z, q) ;

};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

 return prompt("What is the answer to the meaning of life, the universe, and everything?", "earth");



};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

  return confirm("Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!")

};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  var theNumber = Number(prompt("Pick a number", ""));

  console.log (theNumber); 
  

};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.

  // Initialize `foo` with a string.

  // Log `foo` to the console.

  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.

  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.

  // Return the opposite of `quux`.

  var foo;

  foo = "What up";

  console.log(foo);

  var ding = bar + foo + bar;

  var luux = confirm(strReverse(ding));

  return !luux;

};


/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

  console.log( "Welcome to Camelot!" );

  //If 'isSerious' is false, output the message:

  //On second thoughts, let's not go to Camelot. It is a silly place.

  if(!isSerious){console.log("On second thoughts, let's not go to Camelot. It is a silly place.")}



};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  if (temperature >= 70) {
    console.log("Hermit crab warning!");
  
  } 
  // Then output:
  //     Hermit crab warning!
  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.
  else {
    console.log("Catch of the day: influenza, $14/lb.");
  }
  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!

  console.log("Thanks for visiting Pier One and Three Quarters!"); 

};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
  var luckyNumber = 7;

  // If the length of `whatDay` is 6 or less...
  if (whatDay.length <= 6) {
    luckyNumber = luckyNumber + "!";
  }
  // If `whatDay` is "Mannersday"...
  if (whatDay == "Mannersday") {
    luckyNumber = luckyNumber + 4;
  }
  // If `whatDay` is "Foosday"...
  else if (whatDay == "Foosday") {
    luckyNumber = luckyNumber + 2;
  }
  // If `whatDay` is "Heyday"...
  else if (whatDay == "Heyday") {
    luckyNumber = luckyNumber + luckyNumber.charAt(0);
  }
  // Otherwise...
  else {
    luckyNumber = Infinity;
  }
  // Return `luckyNumber`
  return luckyNumber;

};


// Conditional 4
Exer.condition4 = function () {

  // Prompt the user
  var userInput = prompt("Enter today's date, please.");
  
  // If the user's input is not a number...
  if (typeof userInput != "number" || isNaN(userInput)) {
    console.log("What do you think this is, bub? Wonderland?");
  }

  // Otherwise...
  else {
    // If the user's input is less than 1...
  if (userInput < 1) {
      console.log("Negativelaaaaaaand~!");
    }
    
    
    // If the user's input is greater than 31...
    else if (userInput > 31) {
      console.log("Are they paying you overtime for this?");
    }
    // If the user's input between 29 and 31, inclusive...
    else if (userInput >= 29 && userInput <= 31) {
      console.log("I sure hope it isn't February.");
    }
    // Otherwise...
    else {
      console.log("Did you know? There are exactly " +
        userInput +" ways to make today awesome!");
    }
  }
};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {
  
var numSheep = 10;
while (numSheep > 0) {
    console.log(numSheep + " sheep");
    numSheep--;
  }
};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {

  var deadWitch = "I'm melting!";
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
deadWitch = deadWitch.substr(2)
console.log(deadWitch)
console.log("What a world!")
};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {
  var num = 0;
  do {
    console.log(num % 3);
    num++;
  } while (num < 6)
};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {
  
  var trainNum = 1;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");
trainNum++;
console.log("Train# " + trainNum + ": In flight!?");

};
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {
  var firstName = "Zachery"; 
  var lastName = "Moneypenny"; 
  if(firstName === "Zachery"){ 
    lastName = "Johnson"; 
  }
  };

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {
    var firstName = "Penny"; 
    var lastName = "Moneywhistle"; 
    if(firstName === "Penny"){ 
        lastName = "Johnson"; 
    }  
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {

   console.log("...")
  console.log("    ...AA")
  console.log("        ...AAAA")
  console.log("            ...AAAAAA")
  console.log("                ...AAAAAAAA")
  console.log("                    ...AAAAAAAAAAH!")


};

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {

for (var i = 0; i < 2; i++) {
    console.log( "Hi!" );
    for (var j = 0; j < 3; j++) {
      console.log( "My name is" );
    }
    console.log( "Slim Shady" );
  }

  }; 
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

  // Your work here
  for (var i = 20; i >= 5; i--) {
    if (i % 2 == 0) {
      console.log(i, "even")
    } else {
      console.log(i, "odd");
    }
  }

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

while(yeng()) {
    break;
  }

};

// Breaking 2
// Every time theatre.current() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if (theatre.current() === "Electric Boogaloo!") {
      break;
    }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  // Quadruple kiwis.

  kiwis *= 4;

  // Reduce kiwis by 2.

   kiwis -= 2;

  // Halve kiwis.

  kiwis /= 2;

  // Concatenate " handsomely hirsute kiwis" to kiwis.

  kiwis += " handsomely hirsute kiwis";

  // Return kiwis.

  return kiwis;

};


// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo++ ) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.

  switch(animal) {
    // "cow": "foo"
    case "cow":
      output += "foo";
      break;

    // "sheep": "bar"
    case "sheep":
      output += "bar";
      break;

    // "duck": "quux"
    case "duck":
      output += "quux";
      break;

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"

    default:
      output += "ring-a-ding-ding-dingding-ding-a-ding-ding";
      break;
  }

  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; index < happyCat.length; index++) {
    if (index % 4 == zero) {
      console.log(happyCat);
    }
  }

};
/* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {

    if ( missiles ) {
      // missiles.launch();
      // something about wheat
    } else {
      cower();
    }
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2); // oh no! Look who it is, bandits! These bricks are outrageous!
    }
  }

};


Exer.comments2 = function () {

/*
 I first found this number scrawled on the back of one of
 my notebooks a few years ago. Since then, it has often
 dropped by, showing up in phone numbers and the serial
 numbers of products that I've bought. It obviously likes
 me, so I've decided to keep it.
*/

};