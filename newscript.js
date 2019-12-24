// step 1 - set up variables

var pos = 0;
// pos = position 
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var correct = 0;

// Step 2 - question array (this ia fancy multidimensional arrya with 4 inner array elements with 5 elments inside them)

var questions = [
  ["What is the highest capital city in the world?", "Denver", "La Paz", "Kathmandu", "B"],
  ["If you plan to vist all 3 Caucasus Countries, which of the 3 is the only country with open boarders to the other two?", "Georgia", "Azerbijan", "Armenia", "A"],
  ["Which country is known for consumption of Vegemite?", "France", "South Africa", "Australia", "C"],
  ["Which country can you find monkeys bathing in hot springs?", "Japan", "Gibarlter", "Mayalsia", "A"]
  ];

// Step 3 - create a function to render the question 
function renderQuestion(){
  // matching the var/element "test" to its ID
test = document.getElementById("test");
// if position is greater or equal to the length of the questions
if(pos >= questions.lenght){
  // write to the HTML via Javascript to announce how many questions you got right
  test.innerHTML = "<h2> You got "+correct+" of "+questions.length+" questions correct</h2>";
  //? to use the element ID test_status to wrtie to the HTML that the game is complete
  document.getElementById("test_status").innerHTML = "Test Completed"
  // ? this is supposed to reset the variable to allow the user to restart the test? not sure how this one is supposed to work
  pos = 0;
  correct = 0;
  //stops the render function when test is finished 
  return false;
}

//write to the HTML "Question plus the position plus one of the questions length"
document.getElementById("test_status").innerHTML = "Question " +(pos+1)+" of "+questions.length;

}