
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
    pos = 0;
    correct = 0;
    return false;
  }
  document.getElementById("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  question = questions[pos][0];
  chA = questions[pos][1];
  chB = questions[pos][2];
  chC = questions[pos][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  if(choice == questions[pos][4]){
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);

