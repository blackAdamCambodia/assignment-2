
function checkLargestNumber() {  
    // Get the input values
    let largeNumOne = parseFloat(document.getElementById('largeNumOne').value);
    console.log(largeNumOne)
    let largeNumTwo = parseFloat(document.getElementById('largeNumTwo').value);
    console.log(largeNumTwo)
    // Check if both input values are valid numbers
    if(!isNaN(largeNumOne) && !isNaN(largeNumTwo)){
    
       let largeNumResult = Math.max(largeNumOne, largeNumTwo);              
          document.getElementById("largeNumResult").textContent =  "The largest number is: " + largeNumResult;
          console.log(largeNumResult)   
    }
  
  };
var imageSix = document.querySelector('#exImageSix');
    
function addImageSix() {
    imageSix.src = './assets/img/exerciseSix.PNG';
    var y = document.getElementById("exImageSix");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
