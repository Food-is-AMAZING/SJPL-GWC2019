function funFact() {
  
  var firstFact = prompt("The USA, China, and the EU account for a majority of all the greenhouse gases emitted on Earth; China producing 30%, USA producing 15%, and the EU produces 9%. (press OK to continue) ")
  
  

  var answerThis = prompt("Was this information useful to you?")
  
  var newT = document.getElementById("text");
  
  if (answerThis = "yes") {
    
     newT.innerHTML = "Thank you for learning!";
  
  } else if (answerThis = "no") {
    
     newT.innerHTML = "Thank you for reading!";
  
  } else {
    
     newT.innerHTML = "Thank you for learning!";
  
  }
  


  newT.style.fontSize ="11px";
  
     newT.style.color = "black"; 
 

} 