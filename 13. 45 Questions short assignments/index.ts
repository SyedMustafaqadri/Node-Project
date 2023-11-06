// ??? Q1 - Complete

const perName1 = "Eric";
console.log(`Hello ${perName1}, would you like to learn some TypeScript today?`);
// ??? Personal Message: Q2 - Complete

const personName: string = "Mustafa"; // Replace with the person's name

// Lowercase
const lowercaseName: string = personName.toLowerCase();
console.log("Lowercase: " + lowercaseName);

// Uppercase
const uppercaseName: string = personName.toUpperCase();
console.log("Uppercase: " + uppercaseName);

// Titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const titlecaseName: string = toTitleCase(personName);
console.log("Titlecase: " + titlecaseName);

// ??? Name Cases: Q3 - Complete

let quotes: string = 'Allama Iqbal Once Said,"Islam is itself destiny and will not suffer destiny."';
console.log(quotes)

// ??? Famous Quote: Q4 - Complete

let famousPerQuote: string = 'Allama Iqbal';
let quotes2: string = `${famousPerQuote} Once Said,"Islam is itself destiny and will not suffer destiny."`;
console.log(quotes2);

// ??? Famous Quote 2: Q5 - Complete

let perName: string = '\t Mustafa \n';
console.log(perName)

// ??? Stripping Names: Q6 - Complete

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// ??? Number Eight: Q7 - Complete

let favNumber: number = 8;
console.log(favNumber);

// ??? Favorite Number: Q8 - Complete

let favNumber1: number = 10; // My favorite number
console.log(favNumber1);

// ??? Adding Comments: Q9 - Complete

let friName: Array<string> = ['Mustafa', 'Ali', 'Hassan', 'Ahmed', 'Hyder'];
friName.forEach((name) => {
    console.log(name);
})

// ??? Names: Q10 - Complete

friName.forEach((name) => {
    console.log(`Assalam Alikom ${name}`);
})

// ??? Greetings: Q11 - Complete

let myFavCar: Array<string> = ['BMW', 'Mercedes', 'Audi'];
myFavCar.forEach((name) => {
    console.log(`One Day I would like to own a ${name}`);
});

// ??? Your Own Array: Q12 - Complete

let guestList: Array<string> = ['Mustafa', 'Ali', 'Hassan'];
guestList.forEach((guest) => {
    console.log(`Hey ${guest}, I would like to invite you to dinner.`);
})

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
let placesToVisit: string[] = ['Makkah', 'Madina', 'Turkey', 'Canada', 'Malasiaya'];

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

let guestList1: Array<string> = ['Mustafa', 'Ali', 'Hassan'];
guestList1.forEach((guest, index) => {
    console.log(`${index + 1}: ${guest}`);
})

// ??? Dinner Guests: Q18 - Complete

let countries: string[] = [
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


// ??? TypeScript objects containing information: Q20 - Complete

let countries1: string[] = [
    "Pakistan",
    "China",
    "Russia",
    "Egypt",
    "India"
    // "United States", // Error: ',' expected.
];

// ??? Intentional Error: Q21 - Complete

let number = 5;
let text = 'hello';
let isTrue = true;
let isFalse = false;

console.log("Is number == 5? I predict True.");
console.log(number == 5);

console.log("Is text != 'world'? I predict True.");
console.log(text != 'world');

console.log("Is isTrue true? I predict True.");
console.log(isTrue);

console.log("Is isFalse not true? I predict True.");
console.log(!isFalse);

console.log("Is number > 3? I predict True.");
console.log(number > 3);

console.log("Is text == 'Hello'? I predict False.");
console.log(text == 'Hello');

console.log("Is isTrue false? I predict False.");
console.log(!isTrue);

console.log("Is isFalse true? I predict False.");
console.log(isFalse);

console.log("Is number <= 2? I predict False.");
console.log(number <= 2);

console.log("Is text != 'hello'? I predict False.");
console.log(text != 'hello');


// ??? Conditional Tests: Q22 - Complete

let text1 = 'hello';
let text2 = 'world';
let number1 = 10;
let number2 = 5;
let fruits = ['apple', 'banana', 'orange'];

console.log("Is text1 equal to 'hello'? I predict True.");
console.log(text1 == 'hello');

console.log("Is text1 not equal to text2? I predict True.");
console.log(text1 != text2);

console.log("Is text1 in lowercase equal to 'HELLO'? I predict True.");
console.log(text1.toLowerCase() == 'hello');

console.log("Is number1 equal to 10? I predict True.");
console.log(number1 == 10);

console.log("Is number1 not equal to number2? I predict True.");
console.log(number1 != number2);

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to 10? I predict True.");
console.log(number1 <= 10);

console.log("Is number1 greater than 5 and number2 less than 2? I predict False.");
console.log(number1 > 5 && number2 < 2);

console.log("Is text1 equal to 'hello' or text2 equal to 'world'? I predict True.");
console.log(text1 == 'hello' || text2 == 'world');

console.log("Is 'banana' in the 'fruits' array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' not in the 'fruits' array? I predict True.");
console.log(!fruits.includes('grape'));

// ??? More Conditional Tests: Q23 - Complete

let alien_color1 = 'green';

if (alien_color1 === 'green') {
    console.log("The player just earned 5 points.");
}

let alien_color2 = 'red';

if (alien_color2 === 'green') {
    console.log("The player just earned 5 points.");
}


// ??? Alien Colors #1: Q24 - Complete