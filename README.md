Describe Pizza()

Test: "It should return a Pizza object for toppings and size"
Code: const firstPizza = new Pizza("Cheese", "large");
Expected Output: PizzaPizza { toppings: "Cheese", size: "large" }


Test: "It should return the total of the pizza order"
Code: Pizza.prototype.totalPrice()
Expected Output: $7, $12, $13

<!-- 
#### Brainstorm
* Create the object type and define pizza properties

* Create a prototype method that will reveal cost of pizza depending on order

* Add sauce, and cheese options if code works -->