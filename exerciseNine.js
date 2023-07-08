function filterEvenNumbers() {
    var inputElement = document.getElementById("inputAnyNumbers");
    var resultElement = document.getElementById("filterEvenNum");
  
    // Get the user input and convert it to an array of numbers
    var input = inputElement.value;
    var numbers = input.split(",").map(function(number) {
      return parseInt(number.trim(), 10);
    });
  
    // Use the filter method to create a new array with only the even numbers
    var evenNumbers = numbers.filter(function(number) {
      return number % 2 === 0;
    });
  
    // Display the filtered even numbers
    resultElement.textContent = "Filtered Even Numbers: " + evenNumbers.join(", ");
  }
  var imageNine = document.querySelector('#exImageNine');
    
  function addImageNine() {
    imageNine.src = './assets/img/exerciseNine.PNG';
      var y = document.getElementById("exImageNine");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } 