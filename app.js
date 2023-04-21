// Zakat Calculator Task 1
var zakatperc = 0.025
var amount = prompt("(Task 1)Enter Your total Assets:")
var result = zakatperc * amount
alert("Your Zakat value is: Rs." + result)
    
// Fitrah Amount Calculator Task 2
var no_fam_members = prompt("(Task 2)Enter total number of Family members:")
var fitrahMethod = prompt("Choose a fitrah method:\n1. Gandum/Wheat \n2. Jo/Oat \n3. Khajoor/Dates \n4. Kishmish/Raisins");
var totalamount
if (fitrahMethod == 1) {
   totalamount = no_fam_members * 150
} else if(fitrahMethod == 2) {
   totalamount= no_fam_members * 300
} else if (fitrahMethod == 3) {
   totalamount= no_fam_members * 600
} else if (fitrahMethod == 4) {
   totalamount = no_fam_members * 1000
}
alert("Your total fitrah amount is: Rs." + totalamount)

//  Secret Number Task 3
var secretnumber = 4
var userInputNumber = prompt("(Task 3)Please Guess a number Between 1 to 10:")
if (userInputNumber < 4) {
    alert("Your Guess is too low")
}
else if (userInputNumber == 4) {
    alert("Congratulations! You guessed the secret number")
} else if (userInputNumber > 4) {
    alert("Your Guess is too High")
}else {
  alert("Invalid input. Please enter a number between 1 to 10");
}

//  Make Your name Capitalized Task 4
var name = prompt("(Task 4)Please enter your name:");
var capitalizename = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
alert("Capitalized Case Name: " + capitalizename);

//  Push contact numbers and Names       TASK 5
var contactnames = []
var contactnumbers = []
var Iname = prompt("(Task 5)Enter the name: ")
var Inumber = prompt("(Task 5)Enter the number: ")
// pushing both values to an array
contactnames.push(Iname)
contactnumbers.push(Inumber)

// printing all the values in console
console.log("Contact Numbers:");
for (var i = 0; i < contactnumbers.length; i++) {
  console.log(contactnumbers[i]);
}
console.log("Contact Names:");
for (var i = 0; i < contactnames.length; i++) {
  console.log(contactnames[i]);
}


//   TASK 6,   TASK 6
// Create an array of products
var products = ["watch", "laptop", "computer", "macbook", "chair", "Pencil", "SOFA", "Door", "Candy","Toffee", "Cake"];
var positionToRemove = prompt("(Task 6)Enter the position of the product you wants to remove (0-10):");

// Remove the item at the specified position
var removedItem = products.splice(positionToRemove - 1, 1);

// Print removed item and remaining items to the console
console.log("Removed item:", removedItem);
console.log("Remaining items:", products);
console.log("Total number of items remaining:", products.length);


// Voting  Task 7,  Task 7
var nationality = prompt("(Task 7)What is your nationality?");
var gender = prompt("(Task 7)What is your gender? male/female");
var age = prompt("(Task 7)What is your age?");

// Check if the person is Pakistani or Indian
if (nationality === "Pakistani" || nationality === "Indian") {
  // Check their gender and age for eligibility to vote
  if (gender === "male" && age >= 18) {
    alert("You are eligible to vote.");
  } else if (gender === "female" && age >= 18) {
      var isMarried = prompt("Are you married? (yes or no)");
    //   check if married or Not
    if (isMarried === "yes") {
      alert("You are eligible to vote.");
    } else {
      alert("Sorry, you are not eligible to vote.");
    }
  } else {
    alert("Sorry, you are not eligible to vote.");
  }
} else {
  alert("Sorry, you are not eligible to vote.");
}

//  Team players   Task 8 , Task 8

var WorldCupSquad = [
  "Babar Azam",
  "Fakhar Zaman",
  "Imam-ul-Haq",
  "Shan Masood",
  "Haider Ali",
  "Shoaib Malik",
  "Mohammad Rizwan",
  "Sarfaraz Ahmed",
  "Shadab Khan",
  "Imad Wasim",
  "Faheem Ashraf",
  "Haris Rauf",
  "Hasan Ali",
  "Shaheen Afridi",
  "Usman Qadir"
];
console.log("Pakistans total Squad:");
for (var i = 0; i < WorldCupSquad.length; i++) {
  console.log((i + 1) + ": " + WorldCupSquad[i]);
}

var PlayingSquad = WorldCupSquad.slice()
PlayingSquad.splice(5, 2);
PlayingSquad.splice(9, 2);
// Output the final team of 11 players
console.log("Pakistan Squad for the match:");
for (var i = 0; i < PlayingSquad.length; i++) {
  console.log((i + 1) + ": " + PlayingSquad[i]);
}
