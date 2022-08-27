//Business Logic

// Creating Object type

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size
}

// Creating price total based off of user's chosen selections

Pizza.prototype.priceTotal = function() {
  let toppingPrice = 0;
  let sizePrice = 0;

  //Topping pricing
  if (this.toppings === "pepperoni") {
    toppingPrice += 4;
  }
  if (this.toppings === "pineapple") {
    toppingPrice += 2;
  }
  if (this.toppings === "veggie") {
    toppingPrice +=2;
  }
  // if (this.toppings === "pepperoni" && "pineapple") {
  //   toppingPrice +=6
  // }
  // if (this.toppings === "veggie" && "pineapple") {
  //   toppingPrice +=4
  // }
  // if (this.toppings === "pepperoni" && "veggie") {
  //   toppingPrice +=6
  // }
  // if (this.toppings === "pepperoni" && "veggie" && "pineapple") {
  //   toppingPrice +=8
  // }

  //Size pricing
  if (this.size === "small") {
    sizePrice += 5;
  }
  if (this.size === "medium") {
    sizePrice += 7;
  }
  if (this.size === "large") {
    sizePrice += 10;
  }
  return toppingPrice + sizePrice;
}


// UI Logic

//form submission
function handleFormSubmission(event) {
  event.preventDefault();
  const form = document.getElementById("pizza-form");
  let toppingSelections = document.querySelector('.form-checked:checked').value;
  let sizeSelection = form.size

//   let newPizza = new Pizza(toppingSelections, sizeSelection);
//   console.log(newPizza);
//   document.getElementById("result").innerText= newPizza;

//   document.getElementById("price").removeAttribute("class");
// }

//window load
window.addEventListener("load", function() {
  const form = document.getElementById("pizza-form");
  form.addEventListener("submit", handleFormSubmission)
})
