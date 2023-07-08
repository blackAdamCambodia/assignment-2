
function calculateSum() {
  var numbersInput = document.getElementById("sumArrayNumber").value;
  var numbersArray = numbersInput.split(",").map(Number);
  var sum = sumArray(numbersArray);
  document.getElementById("resultSumNumber").innerHTML = "Sum: " + sum;
}

function sumArray(sumArrayNumber) {
  return sumArrayNumber.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
}
var imageTen = document.querySelector('#exImageTen');
    
  function addImageTen() {
    imageTen.src = './assets/img/exerciseTen.PNG';
      var y = document.getElementById("exImageTen");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } 