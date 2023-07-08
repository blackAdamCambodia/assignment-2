function sumNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
 const sumResult= (sumNumbers(1, 2, 3, 4, 5,));
 console.log(sumResult);

 const numberDiv = document.getElementById('number')
 numberDiv.innerHTML= sumResult


 var imageTwo = document.querySelector('#exImagetwo');
    
function addImageTwo() {
    imageTwo.src = './assets/img/exerciseTwo.PNG';
    var y = document.getElementById("exImagetwo");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
