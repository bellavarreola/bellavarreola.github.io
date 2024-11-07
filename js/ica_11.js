// Function to display a fortune
function tellFortune(numberOfChildren, partnerName, location, jobTitle) {
    const fortune = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
    
    const fortuneDiv = document.getElementById("fortune-results");
    const fortuneParagraph = document.createElement("p");
    fortuneParagraph.textContent = fortune;
    fortuneDiv.appendChild(fortuneParagraph);
}

// Call tellFortune 3 times with different arguments
tellFortune(2, "Alex", "New York", "Software Developer");
tellFortune(3, "Jordan", "Paris", "Architect");
tellFortune(1, "Taylor", "Tokyo", "Graphic Designer");

// Function to calculate dog age
function calculateDogAge(humanYears) {
    const dogYears = humanYears * 7;
    const message = `Your doggie is ${dogYears} years old in dog years!`;
    
    const resultsDiv = document.getElementById("dog-age-results");
    const ageParagraph = document.createElement("p");
    ageParagraph.textContent = message;
    resultsDiv.appendChild(ageParagraph);
}

// Call calculateDogAge 3 times with different values
calculateDogAge(1);
calculateDogAge(3);
calculateDogAge(5);

// Function to get user's input and calculate the dog age
function getUserDogAge() {
    const userInput = document.getElementById("dogAgeInput").value;
    if (userInput) {
        calculateDogAge(parseInt(userInput));
    }
}

// Function to reverse a number
function reverseNumber(number) {
    const reversed = parseInt(number.toString().split('').reverse().join(''));
    return reversed;
}

// Function to output the reversed number to the DOM
function displayReversedNumber(number) {
    const reversed = reverseNumber(number);
    const resultMessage = `The reverse of ${number} is ${reversed}.`;

    const reverseDiv = document.getElementById("reverse-number-results");
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = resultMessage;
    reverseDiv.appendChild(resultParagraph);
}

// Call displayReversedNumber with different values
displayReversedNumber(32243);
displayReversedNumber(12345);

// Function to sort letters of a string in alphabetical order
function alphabetizeString(str) {
    return str.split('').sort().join('');
}

// Function to display the alphabetized string to the DOM
function displayAlphabetizedString(str) {
    const alphabetized = alphabetizeString(str);
    const resultMessage = `The alphabetical order of "${str}" is "${alphabetized}".`;

    const alphabeticalDiv = document.getElementById("alphabetical-order-results");
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = resultMessage;
    alphabeticalDiv.appendChild(resultParagraph);
}

// Call displayAlphabetizedString with different values
displayAlphabetizedString("webmaster");
displayAlphabetizedString("javascript");

// Function to convert a string to title case (capitalize first letter of each word)
function toTitleCase(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}

// Function to display the title-cased string to the DOM
function displayTitleCasedString(str) {
    const titleCased = toTitleCase(str);
    const resultMessage = `The title case of "${str}" is "${titleCased}".`;

    const titleCaseDiv = document.getElementById("title-case-results");
    const resultParagraph = document.createElement("p");
    resultParagraph.textContent = resultMessage;
    titleCaseDiv.appendChild(resultParagraph);
}

// Call displayTitleCasedString with different values
displayTitleCasedString("the quick brown fox");
displayTitleCasedString("hello world from javascript");
