// import "./styles.css";

//define a default array of objects
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

//first output box
let firstOut = document.getElementById('firstOut');

//second output box
let secondOut = document.getElementById('secondOut');

//add new user function
function addData() {
  var newName = document.getElementById("name").value;
  var newAge = document.getElementById("age").value;
  var newProf = document.getElementById("profession").value;
  var newId = arr[arr.length-1].id + 1;
  
  if(newName != "" && newAge != "" && newProf != ""){
    let newObj = { id: newId, name: newName, age: newAge, profession: newProf};
  
    arr.push(newObj);
    printArray(arr);  
    //clear all inputs
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    secondOut.innerHTML = "Form submitted successfully! <br>";
  }
  else{
    printArray(arr);
    alert("Fields Incomplete");
  }
}

//print array as cards
function printArray(arr) {
  let htmlCode = '';
  arr.forEach(function(singleObj) {
    htmlCode = htmlCode + 
    `
    <div class="card">
        <span class="id">${singleObj.id}.</span>
        <span class="name">Name: ${singleObj.name}</span>
        <span class="prof">Profession: ${singleObj.profession}</span>
        <span>Age: ${singleObj.age}</span>
    </div>`;
  });

  const cardPrint = document.querySelector(".all-cards");

  cardPrint.innerHTML = htmlCode;
}

//filter data function
var reqProf = document.getElementById("filterProfession");

function filterdata() {
  var value = reqProf.options[reqProf.selectedIndex].value;

  if(value != "null"){
    var filtered = arr.filter(function(prof) { 
      return prof.profession == value; 
    });

    printArray(filtered);
  }
  else{
    alert("Select a profession to filter")
  }
}
