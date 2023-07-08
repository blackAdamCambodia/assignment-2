const submitMultiply = (event) => {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  const numberOne = parseFloat(document.getElementById("numberOne").value);
  console.log(numberOne)
  const numberTwo = parseFloat(document.getElementById("numberTwo").value);
  console.log(numberTwo)
  // Check if both input values are valid numbers
  if (!isNaN(numberOne) && !isNaN(numberTwo)) {
    const result = numberOne * numberTwo;

    // Display the result
    document.getElementById("multipleResult").textContent = "Result: " + result;
    console.log(result)
  } else {
    // Handle invalid input
    document.getElementById("multipleResult").textContent = "Invalid input";
  }
};

var imageFive = document.querySelector('#exImageFive');
    
function addImageFive(){
  imageFive.src = './assets/img/exerciseFive.PNG';
    var y = document.getElementById("exImageFive");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}