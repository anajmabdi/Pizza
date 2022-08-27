# <div align="center"> **Pizza Parlor**</div>

#### <div align="center"> *By Najma Abdi* </div>  
<p>&nbsp;</p>

## <div align="center"> Technologies Used
<div align="center">* HTML
<div align="center">* CSS
<div align="center">* JavaScript 
<div align="center">* Markdown

<p>&nbsp;</p>

## <div align="center"> Description </div>
<div align="center"> This website gives the total for pizza order based on how the user wants their pizza customized.</div>
<p>&nbsp;</p>


## <div align="center">Setup/Installation Requirements 
<div align="center">* Clone this repository to your desktop 
<div align="center">* Navigate to the top level of the directory
<div align="center">* Open index.html in your browser 
<p>&nbsp;</p>


## <div align="center"> Known bugs </div>
    Uncaught TypeError: Cannot read properties of null (reading 'value')
    at HTMLFormElement.handleFormSubmission (scripts.js:59:69)
<p>&nbsp;</p>


## <div align="center"> TDD </div>
    Describe Pizza()

    Test: "It should return a Pizza object for toppings and size"
    Code: const firstPizza = new Pizza("Cheese", "large");
    Expected Output: Pizza { toppings: "Cheese", size: "large" }

    Describe: totalPrice()

    Test: "It should return the total of the pizza order"
    Code: Pizza.prototype.totalPrice()
    Expected Output: $7, $12, $13

    Describe: handleFormSubmission()

    Test: "It should return the total after user submits selections
    Code: let priceTotal(pizza)
    Expected Output: $#
<p>&nbsp;</p>

#### License

Copyright (c)  Najma Abdi