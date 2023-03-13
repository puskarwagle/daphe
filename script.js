colors=["red","green","blue","black","orange"];
console.log(colors);

var cDiv = document.getElementById("colours");
var cbtn = document.createElement("button");
cbtn.style.fontSize = "1rem";
cbtn.textContent = "change colours on click";
cDiv.appendChild(cbtn);

// initialize the previous color to null
var previousColor = null;

function change() {
    let newColor;

    // if the previous color was blue, set the new color to green
    if (previousColor == "blue") {
        newColor = "green";
    } else {
        // otherwise, select a random color from the array
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }

    // update the button background color and text
    cbtn.style.backgroundColor = newColor;
    cbtn.textContent = newColor;

    // set the previous color to the current color
    previousColor = newColor;
}

cbtn.addEventListener('click', function() {
    change();
});















// FizzBuzz problem
  var jsDiv = document.getElementById("js");

  var abtn = document.createElement("button");
  abtn.style.fontSize = "1rem";
  abtn.textContent = "Puts FizzBuzz on the console!";
  jsDiv.appendChild(abtn);

  function fizzbuzz(num) {
  	for (i = 1; i <= num; i++) {
  		if (i % 3 == 0 && i % 5 == 0) {
  			console.log("FizzBuzz")
  			
  		}
  		else if (i % 5 == 0) {
  			console.log("Fizz")
  		}
  		else if (i % 3 == 0) {
  			console.log("Buzz")
  		}
  		else {
  			console.log(i)
  		}
  	}
  }
  abtn.addEventListener('click', function() {
  	fizzbuzz(100)
  });
