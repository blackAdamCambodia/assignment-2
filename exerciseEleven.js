
function sortAndDisplay() {
  var numbersInput = document.getElementById("sortArrayNumber").value;
  var numbersArray = numbersInput.split(",").map(Number);
  var sortedArray = sortNumbers(numbersArray);
  document.getElementById("sortNumResult").innerHTML = "Sorted Array: " + sortedArray.join(", ");
}

function sortNumbers(sortArrayNumber) {
  return sortArrayNumber.sort(function(a, b) {
    return a - b;
  });
}
var imageEleven = document.querySelector('#exImageEleven');
    
  function addImageEleven() {
    imageEleven.src = './assets/img/exerciseEleven.PNG';
      var y = document.getElementById("exImageEleven");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } 