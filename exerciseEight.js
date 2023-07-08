function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
  }
  
  function doubleArray() {
    // Input array of numbers
    var inputNumbers = document.getElementById("numbers").value;
    
    // Convert comma-separated string to an array of numbers
    var inputArray = inputNumbers.split(",").map(Number);
    
    // Call the doubleNumbers function
    var doubledArray = doubleNumbers(inputArray);
    
    // Display the result
    var outputElement = document.getElementById("output");
    outputElement.textContent = "Doubled Array: " + doubledArray;
  }
  
  var imageEight = document.querySelector('#exImageEight');
    
  function addImageEight() {
    imageEight.src = './assets/img/exerciseEight.PNG';
      var y = document.getElementById("exImageEight");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } 