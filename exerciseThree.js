
function createGreeting() {
    const name = document.getElementById('nameInput').value;
    const greetingMessage = `Hello, ${name}! Welcome to our website.`;
    document.getElementById('greetingOutput').textContent = greetingMessage;
  }

  var imageThree = document.querySelector('#exImageThree');
    
  function addImageThree() {
    imageThree.src = './assets/img/exerciseThree.PNG';
      var y = document.getElementById("exImageThree");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  } 