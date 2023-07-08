function getAddressCity(address) {
    return address?.city ?? "Unknown";
}

function displayAddress() {
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;

    var address = {
        street: street,
        city: city,
        country: country
    };

    var addressCity = getAddressCity(address);

    var addressOutput = document.getElementById("addressOutput");
    addressOutput.textContent = "City: " + addressCity ;
}

var imageSeven = document.querySelector('#exImageSeven');
    
function addImageSeven() {
  imageSeven.src = './assets/img/exerciseSeven.PNG';
    var y = document.getElementById("exImageSeven");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
} 