// Question 1: Variable Declarations and Initialization
// Create three variables: productName (string with value "Laptop"), price (number with value 999.99), and inStock (boolean with value true). Console.log all three variables in a single statement.

var productName = "laptop";
var price = 999.99;
var inStock = true;
console.log(productName, price, inStock);



//Question 2: Mathematical Operations
//Calculate and display:


//The remainder when 27 is divided by 4
var num1 = 27 % 4;
console.log(num1);


//The square of 12 (using exponentiation operator **)num
var num2 = 12 ** 2;
console.log(num2);


//The result of incrementing 8 by 1 using the ++ operator
var num3 = 8 / 1;
num3++;
console.log(num3);

//The result of decrementing 15 by 2 using the -= operato
var num4 = 15 / 2;
num4 -= 2;
console.log(num4);


//Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.
var firstName="alex";
var lastName="SMITH";
var fullName= firstName+" "+ lastName;
var nameCase=
fullName.charAt(0).toUpperCase()+
fullName.slice(1).toLowerCase();
console.log(nameCase);
console.log(fullName.length);


//Question 4: if-else Conditional Logic
//Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25.
var temperature=25;
if (temperature > 30){
    console.log("Hot Day");
}
else if(temperature >=20 && temperature <=30){
    console.log("Pleasant Day");
}
else{
    console.log("Cold Day");
}


// Question 5: Comparison Operators
// Create three comparison operations:
// Check if 15 is strictly equal to "15"
var strictly=15==="15";
console.log(strictly);


// Check if 20 is greater than 15 AND less than 25
var num=20;
if(num>15 && num<25){
    console.log("Yes 20 is greater than 15 and less than 25");
    

}
else{
    console.log("No");
    
}


// Check if 10 is not equal to 10 OR 5 is greater than 3
var a=10;
var b=5;
if (a !==10 ||b>3){
    console.log("true");

}
else{
    console.log(false);

    
}


// Question 6: Array Manipulation - Basics
// Create an array colors with values ["red", "green", "blue"]. Then:
// Add "yellow" to the end
var colors=["red","green","blue"];
colors.push("yellow");
colors.shift()
colors.splice(1,0,"purple")
console.log(colors);


// Question 7: Array Manipulation - splice()
// Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

// Remove "cherry"
var fruits=["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2,1,)
console.log(fruits);


// Replace "date" with "dragonfruit"
fruits.splice(2,1,"dragonfruits")
console.log(fruits);


// Extract the middle 3 elements into a new array
var middlefruits=fruits.slice(0,3)

console.log(middlefruits);


// Question 8: for Loop - Number Sequence
// Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.
var sum = 0;

for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    if (i === 9) {
        break;
    }
    console.log(i);
    sum += i;
}
console.log( sum);


// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:
var rows = 5;

for (var i = 1; i <= 5; i++) {
    var pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


// question 10: String Methods - Search and Extractvar
// Given text = "The quick brown fox jumps over the lazy dog":
// Find the position of "fox"
var text="The quick brown fox jumps over the lazy dog";
text=text.indexOf("fox");
console.log(text);


// Extract "brown fox" using substring/slice
var text="The quick brown fox jumps over the lazy dog";
 text=text.substring(10,19);
console.log(text);


// Check if the text contains "dog"
var text="The quick brown fox jumps over the lazy dog";
text=text.includes("dog");
console.log(text);


// Get the character at position 10
var text="The quick brown fox jumps over the lazy dog";
text=text.charAt(10);
console.log(text);


// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":
// Replace the first "JavaScript" with "coding"
var sentence="I love JavaScript and JavaScript is awesome";
var text=sentence.replace("JavaScript","coding");
console.log(text);


// Replace ALL "JavaScript" with "JS"
var text=sentence.replaceAll("JavaScript","JS");
console.log(text);


// Replace "awesome" with uppercase "AWESOME"
var text=sentence.replace("awesome","AWESOME");
console.log(text);


// Question 12: Number Rounding and Formatting
// Given num = 123.456789:
// Round to 2 decimal places
var number=123.456789;
var num=number.toFixed(2);
console.log(num);


// Round to nearest integer
var number=123.456789;
var round=Math.round(number);
console.log(round);


// Get the floor value
var number=123.456789;
var floor=Math.floor(number);
console.log(floor);


// Get the ceiling value
var number=123.456789;
var ceil=Math.ceil(number);
console.log(ceil);


// Format to show exactly 4 decimal places
var number=123.456789;
var fixed=number.toFixed(4);
console.log(fixed);



// Question 13: Random Number Generation
// Generate:
// A random integer between 1 and 100 (inclusive)
var random= Math.ceil(Math.random() * 100);
console.log(random);


// A random decimal between 0 and 1 with 3 decimal places
var decimal=Math.random().toFixed(3);
console.log(decimal);


// A random number between 50 and 75 (inclusive)
var num=Math.floor(Math.random()*(75-50)+50);
console.log(num);



// Question 14: Type Conversion
// Perform these conversions:
// Convert string "123" to number
var hadi = Number("123");
console.log(hadi);


// Convert string "45.67" to decimal (float)
var meer= parseFloat("45.67");
console.log(meer);


// Convert number 789 to string
var abdul=String(789);
console.log(abdul);

// Check the type of "true" after converting to boolean
var boolean=("true")
var word=Boolean(boolean);
console.log(word,typeof word);



// Question 15: Date and Time Operations
// Create a Date object for the current time and:
var now=new Date();
// Extract the year, month (0-11), and day
var year=now.getFullYear();
var month=now.getMonth();
var day=now.getDay();
console.log(year,month,day);


// Get the hours in 24-hour format
var hours=now.getHours();
console.log(hours);


// Format it as "YYYY-MM-DD"
// var format=now.getFullYear().getMonth().getDay();
// console.log(format);
let format = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
console.log( format);


// Create a specific date for December 25, 2024
var specific= new Date(2042,11,25);
console.log(specific.toDateString());




// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator (+, -, *, /) as parameters and returns the result. Handle division by zero by returning "Error: Division by zero".
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}
console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "-"));
console.log(calculate(10, 5, "*"));
console.log(calculate(10, 0, "/")); 
console.log(calculate(10, 5, "/")); 
console.log(calculate(10, 5, "%")); 






// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. Write a function incrementCounter that declares a local variable with the same name and increments it, while also incrementing the global variable. Show the difference after calling the function twice.
var global = 0;

function increment() {
    
    var global = 0;

    global++;

    window.global++; 

    console.log( global);
    console.log( window.global);
}
increment();
increment();

console.log( global);


//   Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and returns the corresponding day name (0=Sunday, 1=Monday, etc.). Include a default case for invalid numbers.
var daynumber= 2;
var dayname;
switch(daynumber){
    case 0:
    dayname = "sunday";
    break;
    case 1:
    dayname = "monday"
    break;
    case 2:
    dayname = "tuesday";
    break;
    case 3:
    dayname = "wednesday";
    break;
    case 4:
    dayname = "thursday";
    break;
    case 5:
    dayname = "friday";
    break;
    case 6:
    dayname = "saturday";
    break;
    default:
        dayname= "invelid day numbers"    
}
console.log(dayname);



// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, printing each number. Then print "Blast off!". Also calculate the factorial of 5 using a while loop.
var num=10;
while(num >=1){
    console.log(num);
    num--;
    
}
console.log("blast off!");



var num=5;
var calculate=1;
while(num>0){
    calculate *=num;
    num--;
}
console.log(calculate);



// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password. Start with enteredPassword = "" and keep "asking" (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.
var enteredPassword="";
var correctpassword="secret123";
var attempts=0;
do { 
    attempts++;
    console.log(attempts);
    
    if (attempts === 3){
        enteredPassword="secret123";
    } else {
            enteredPassword="wrongpassword";

        }
    }
while(enteredPassword !== correctpassword && attempts < 5);
if(enteredPassword === correctpassword){
    console.log("access grated");
}
else{
    console.log("Access denied. Too many attempts.");
    
}



// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:
// Use a for loop to find the maximum value
var numbers=[12,45,78,23,56,89,34];
var max = numbers[0];

for(var i = 1; i < numbers.length; i++){
    if (numbers[i] > max) {
        max = numbers[i]; 
}
}
console.log(max);


// Use a for loop to calculate the average
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
var average = sum / numbers.length;
console.log(average);


// Create a new array with only numbers greater than 50
var than50 = [];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
    than50.push(numbers[i]);
    }
}
console.log( than50);


// Reverse the array without using reverse() method
var reverse = [];
for (var i = numbers.length - 1; i >= 0; i--) {
    reverse.push(numbers[i]);
}
console.log( reverse);



// Question 22: Event Handling Simulation
// Create a function handleClick that:
// Gets a value from an input field with id "username"
// Checks if it's empty and shows an alert if so
// Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
// Resets the input field after greeting
function handleClick() {
    let username = document.getElementById("username").value;
    let greetingPara = document.getElementById("greeting");

    if (username === "") {
        alert("Please enter your username!");
    } else {
        greetingPara.textContent = "Welcome, " + username + "!";
        document.getElementById("username").value = ""; // reset input
    }
}





// Question 23: Form Validation Function
// Write a function validateForm that:

// Takes email and password as parameters
// Returns true if email contains "@" and password length ≥ 8
// Otherwise returns false with specific error messages
// Test with multiple test cases
function validateForm(email, password) {
    if (!email.includes("@")) {
        console.log("Error:");
        return false;
    }

    if (password.length < 8) {
        console.log("Error: .");
        return false;
    }

    console.log("Validation successful!");
    return true;
}
console.log(validateForm("userexample.com", "password123")); 
console.log(validateForm("user@example.com", "pass"));       
console.log(validateForm("user@example.com", "password123")); 
console.log(validateForm("admin@site.com", "adminpass"));     
console.log(validateForm("test.com", "12345678")); 




// Question 24: Temperature Converter
// Create a function convertTemperature that:
// Takes a temperature and a unit ("C" or "F") as parameters
// Converts Celsius to Fahrenheit: (C × 9/5) + 32
// Converts Fahrenheit to Celsius: (F - 32) × 5/9
// Returns the converted value with 1 decimal place
function convertTemperature(temp, unit) {
    var converted;

    if (unit === "C" || unit === "c") {
        converted = (temp * 9/5) + 32;
        return converted.toFixed(1) + " °F";
    } else if (unit === "F" || unit === "f") {
        converted = (temp - 32) * 5/9;
        return converted.toFixed(1) + " °C";
    } else {
        return "Invalid unit! Use 'C' or 'F'.";
    }
}


console.log(convertTemperature(0, "C"));     
console.log(convertTemperature(100, "C"));   
console.log(convertTemperature(32, "F"));    
console.log(convertTemperature(212, "F"));   
console.log(convertTemperature(25, "X"));    


// Question 25: Shopping Cart Array Operations
// Create an array cart = [] and write these functions:
// addItem(name, price): Adds item object to cart
// removeItem(name): Removes item by name
// calculateTotal(): Returns sum of all item prices
// applyDiscount(percent): Applies discount to total
// listItems(): Returns array of just item names


var cart = [];
function addItem(name, price) {
    cart.push({ name: name, price: price });
    console.log(`${name} added to cart at $${price}`);
}
function removeItem(name) {
    var index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
        var removed = cart.splice(index, 1)[0];
        console.log(`${removed.name} removed from cart`);
    } else {
        console.log(`${name} not found in cart`);
    }
}

function calculateTotal() {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }
    return total;
}
function applyDiscount(percent) {
    var total = calculateTotal();
    var discounted = total - (total * percent / 100);
    return discounted.toFixed(2);
}
function listItems() {
    var names = [];
    for (let i = 0; i < cart.length; i++) {
        names.push(cart[i].name);
    }
    return names;
}
addItem("Shirt", 25);
addItem("Pants", 40);
addItem("Shoes", 60);

console.log( listItems());
console.log("Total:", calculateTotal());      
console.log("Total after 10% discount:", applyDiscount(10));
removeItem("Pants");
console.log("Cart items after removal:", listItems());
console.log("Total after removal:", calculateTotal()); 





