// Excercise 1: one solution 
const obj = {
    name :'Mohammad Abdul Quaiyum',
    city:'New York'
}
//Object Destructure
const {name,city} = obj;
const ageArr = [13, 35, 50]; 

//Array Destructure
const [underAge, realAge, overAge] = ageArr ;

// Geting value and return it
function destructureExample(obj, ageArr) {
      const { name } = obj;
      const [,realAge,] = ageArr;    
      return { name, realAge };
    }

// Put function Values in a variable
const result = destructureExample(obj,ageArr)
console.log(result);
// set the data for showing 
const nameDiv = document.getElementById('name')
const ageDiv = document.getElementById('age')
nameDiv.innerHTML=result.name
ageDiv.innerHTML=result.realAge


var imageOne = document.querySelector('#exImage');
    
function addImage() {
    imageOne.src = './assets/img/ExerciseOne.PNG';
    var x = document.getElementById("exImage");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

