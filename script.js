// --- Login details ---
let username = prompt("Please enter your username (admin / user)");
let password = prompt("Please enter your password here:");

let role, securityLevel;

if ((username === "admin" || username === "user") && password === "1234") {
  role = username;
  securityLevel = (username === "admin") ? "high" : "low";
  alert(`✅ Hello dear ${role.toUpperCase()}!\nYour security level is: ${securityLevel}`);
} else {
  alert("❌ Incorrect username or password. NO Access! please try again");
  throw new Error("SORRY WE CAN'T GIVE YOU ACCESS");
}

// --- order ---
let customerName = prompt(" what is your name?");
let age = parseInt(prompt("how old are you? (write your age)"));
let coffeeType = prompt("☕ which coffee would you like? (espresso, latte, cappuccino)").toLowerCase();
let quantity = parseInt(prompt(" how many cups?"));

let pricePerCup;

switch (coffeeType) {
  case "espresso":
    pricePerCup = 2.5;
    break;
  case "latte":
    pricePerCup = 3.5;
    break;
  case "cappuccino":
    pricePerCup = 4.0;
    break;
  default:
    alert("that is invalid coffee type!");
    throw new Error("invalid coffee type");
}
// --- discount ---
let originalTotal = pricePerCup * quantity;
let discount = 0;

if (age < 18 || age > 60) {
  discount = originalTotal * 0.10;
}

let finalTotal = originalTotal - discount;

// --- tip and spliting the bill ---
let split = parseInt(prompt("may you tell us how many people are spliting the bill? (1, 2, 3)"));
let tipPercent = parseInt(prompt(" what percentage tip would you like to add? (0, 5, 10, 15)"));

let tipAmount = (finalTotal * tipPercent) / 100;
let grandTotal = finalTotal + tipAmount;
let perPerson = grandTotal / split;

// --- output result ---
let output = `
  <h4>🌟 hello dear, ${customerName}!</h4>
  <ul>
    <li>Coffee: <strong>${quantity}</strong> cup(s) of <em>${coffeeType}</em></li>
    <li>Original Price: $${originalTotal.toFixed(2)}</li>
    <li>Discount: $${discount.toFixed(2)}</li>
    <li>Tip: $${tipAmount.toFixed(2)}</li>
    <li>you final total with Tip: $${grandTotal.toFixed(2)}</li>
    <li>Each person should pay: $${perPerson.toFixed(2)} (${split} people)</li>
  </ul>
  <p>🙏 Thanks for choosing us! Your drink will be ready shortly in 10 minutes so please wait ☕💖</p>
`;

const box = document.getElementById("result-output");
box.innerHTML = output;
box.style.display = "block";