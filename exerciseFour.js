function isEven(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }
  
  function submitForm(event) {
    event.preventDefault();
    var number = parseInt(document.getElementById('numberInput').value);
    console.log(number)
    var result = isEven(number);
    document.getElementById('testResult').innerText = result;
  }

  var imageFour = document.querySelector('#exImageFour');
    
function addImageFour() {
    imageFour.src = './assets/img/exerciseFour.PNG';
    var y = document.getElementById("exImageFour");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}