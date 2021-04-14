/* Loop Functions */

function questionMaker(factors){
  x = Math.floor(Math.random()*(factors[1]-factors[0]+1))+factors[0];
  y = Math.floor(Math.random()*(factors[1]-factors[0]+1))+factors[0];
  solution = x * y;
}

/* FOR LOOP 
* q Problems, tells answer or correct + # left 
* + m mistakes made 
*/
function forLoop(factors){
  alert("For here!");
  alert(factors.toString());
  var mistakes = 0;
  for(question = 1;question <= loopQuestions; question++){
    questionMaker();
    while (answer != solution) {
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != solution) {
        alert("Wrong!");
        mistakes ++;
      }
      else {
        var qLeft = loopQuestions-question;
        alert("Correct! "+ qLeft +" left.");
      }
    }
  }
  return mistakes;
}

/* WHILE LOOP
  * # Problems, tells answer or correct + # left 
  * + # mistakes made 
  */
function whileLoop(factors){
  alert("While here!");
  alert(factors.toString());
  question = 1;
  while(question <= whileQuestions){
      questionMaker();
      answer = prompt("What is "+x+" * "+y+"?");
      if (answer != solution) {
        alert("Wrong!");
        mistakes ++;
      }
      else {
        var qLeft = whileQuestions - question;
        alert("Correct! "+ qLeft +" left to get right.");
        question++;
      }
  }
  return mistakes;
}

/* CUSTOM LOOP WITH TIMER NEEDED! */
function customLoop() {

}