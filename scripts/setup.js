factors = setDifficulty(1);


function setDifficulty(level){
  var factors = [1,1];
  alert("Difficulty set to level "+level);
  if (level == 1){
    factors[0] = 2;
    factors[1] = 6;
  }
  else if (level == 2){
    factors[0] = 2;
    factors[1] = 9;
  } 
  else if (level == 3){
    factors[0] = 6;
    factors[1] = 9;
  } 
  else if (level == 4){
    alert("custom");
  } 
  return factors;
}

function setLoop(mode){
  runLoop(mode,factors);
}

function runLoop(mode,factors){
  alert("Practice Mode set to mode "+mode);
  page = "looptype";
  if (mode ==1){
    alert("How fast can you get "+whileQuestions+" right?");
    mistakes = whileLoop(factors);
    alert("You had "+ mistakes + " mistakes.");
    }
  else if 
    (mode==2) {
    alert("How few mistakes can you make in "+loopQuestions+" questions?");
    mistakes = forLoop(factors);
    alert("You had "+ mistakes + " mistakes.");
  }
  else if (mode ==3){
    alert("Customize it!");
    mistakes = customLoop(factors);
    alert("You had "+ mistakes + " mistakes.");
  }
}