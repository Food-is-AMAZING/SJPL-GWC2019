function funFact() {
  
  var firstFact = prompt("Add Text")
  
  

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