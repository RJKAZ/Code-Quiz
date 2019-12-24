// pos is position of where the user in the test or which question they're up to

var pos = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var correct = 0;

// this is a multidimensional array with 4 inner array elements with 5 elements inside them
// if you don't want answers viewable in the code, then you should use PHP and mySQL database
var questions = [
  ["What is the highest capital city in the world?", "Denver", "La Paz", "Kathmandu", "B"],
  ["If you plan to vist all 3 Caucasus Countries, which of the 3 is the only country with open boarders to the other two?", "Georgia", "Azerbijan", "Armenia", "A"],
  ["Which country is known for consumption of Vegemite?", "France", "South Africa", "Australia", "C"],
  ["Which country can you find monkeys bathing in hot springs?", "Japan", "Gibarlter", "Mayalsia", "A"]
  ];

function renderQuestion(){
  test = document.getElementById("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    document.getElementById("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  document.getElementById("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  // the += appends to the data we started on the line above
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos][4]){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

var count = 15;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

