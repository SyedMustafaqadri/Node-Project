// ??? Q1 - Complete
const perName1 = "Eric";
console.log(`Hello ${perName1}, would you like to learn some TypeScript today?`);
// ??? Personal Message: Q2 - Complete
const personName = "Mustafa"; // Replace with the person's name
// Lowercase
const lowercaseName = personName.toLowerCase();
console.log("Lowercase: " + lowercaseName);
// Uppercase
const uppercaseName = personName.toUpperCase();
console.log("Uppercase: " + uppercaseName);
// Titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const titlecaseName = toTitleCase(personName);
console.log("Titlecase: " + titlecaseName);
// ??? Name Cases: Q3 - Complete
let quotes = 'Allama Iqbal Once Said,"Islam is itself destiny and will not suffer destiny."';
console.log(quotes);
// ??? Famous Quote: Q4 - Complete
let famousPerQuote = 'Allama Iqbal';
let quotes2 = `${famousPerQuote} Once Said,"Islam is itself destiny and will not suffer destiny."`;
console.log(quotes2);
// ??? Famous Quote 2: Q5 - Complete
let perName = '\t Mustafa \n';
console.log(perName);
// ??? Stripping Names: Q6 - Complete
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// ??? Number Eight: Q7 - Complete
let favNumber = 8;
console.log(favNumber);
// ??? Favorite Number: Q8 - Complete
let favNumber1 = 10; // My favorite number
console.log(favNumber1);
// ??? Adding Comments: Q9 - Complete
let friName = ['Mustafa', 'Ali', 'Hassan', 'Ahmed', 'Hyder'];
friName.forEach((name) => {
    console.log(name);
});
// ??? Names: Q10 - Complete
friName.forEach((name) => {
    console.log(`Assalam Alikom ${name}`);
});
// ??? Greetings: Q11 - Complete
let myFavCar = ['BMW', 'Mercedes', 'Audi'];
myFavCar.forEach((name) => {
    console.log(`One Day I would like to own a ${name}`);
});
// ??? Your Own Array: Q12 - Complete
let guestList = ['Mustafa', 'Ali', 'Hassan'];
guestList.forEach((guest) => {
    console.log(`Hey ${guest}, I would like to invite you to dinner.`);
});
// ??? Guest List: Q13 - Complete
console.log(`${guestList[1]} can't make it to the dinner.`);
guestList[1] = 'Amna';
guestList.forEach((guest) => {
    console.log(`Hey ${guest}, I would like to invite you to dinner.`);
});
// ??? Changing Guest List: Q14 - Complete
console.log("Good news! I found a bigger dinner table.");
guestList.unshift('Ahmed');
guestList.splice(2, 0, 'Sana');
guestList.push('Faisal');
guestList.forEach((guest) => {
    console.log(`Hey ${guest}, I would like to invite you to dinner.`);
});
// ??? More Guests: Q15 - Complete
console.log("Sorry, the new dinner table won't arrive in time. We can only invite two people for dinner.");
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guestList.forEach((guest) => {
    console.log(`Hey ${guest}, you're still invited to dinner.`);
});
guestList = [];
console.log(guestList);
// ??? Shrinking Guest List: Q16 - Complete
// Array of places to visit
let placesToVisit = ['Makkah', 'Madina', 'Turkey', 'Canada', 'Malasiaya'];
console.log("Original Order:");
console.log(placesToVisit);
console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());
console.log("\nOriginal Order (Intact):");
console.log(placesToVisit);
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
console.log("\nOriginal Order (Intact):");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("\nOriginal Order (Again):");
console.log(placesToVisit);
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
// ??? Seeing the World: Q17 - Complete
let guestList1 = ['Mustafa', 'Ali', 'Hassan'];
guestList1.forEach((guest, index) => {
    console.log(`${index + 1}: ${guest}`);
});
// ??? Dinner Guests: Q18 - Complete
let countries = [
    "Pakistan",
    "China",
    "Russia",
    "Egypt",
    "India",
    "United States",
];
console.log("List of Countries:");
countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
});
// ??? List of Countries: Q19 - Complete
let pakistan = {
    name: "Pakistan",
    capital: "Islamabad",
    population: 225199937,
    language: "Urdu",
    currency: "Pakistani Rupee (PKR)"
};
let china = {
    name: "China",
    capital: "Beijing",
    population: 1444216107,
    language: "Mandarin",
    currency: "Chinese Yuan (CNY)"
};
let russia = {
    name: "Russia",
    capital: "Moscow",
    population: 145912025,
    language: "Russian",
    currency: "Russian Ruble (RUB)"
};
let egypt = {
    name: "Egypt",
    capital: "Cairo",
    population: 104258327,
    language: "Arabic",
    currency: "Egyptian Pound (EGP)"
};
let india = {
    name: "India",
    capital: "New Delhi",
    population: 1393409038,
    language: "Hindi",
    currency: "Indian Rupee (INR)"
};
let unitedStates = {
    name: "United States",
    capital: "Washington, D.C.",
    population: 331883986,
    language: "English",
    currency: "United States Dollar (USD)"
};
console.log("Country Information:");
console.log("1. Pakistan:", pakistan);
console.log("2. China:", china);
console.log("3. Russia:", russia);
console.log("4. Egypt:", egypt);
console.log("5. India:", india);
console.log("6. United States:", unitedStates);
export {};
// ??? TypeScript objects containing information: Q20 - Complete
