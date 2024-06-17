// Write a Java Script Program to find maximum between two numbers
function findMax(num1, num2) {
    // Compare the two numbers
    if (num1 > num2) {
        return num1;
    } else if (num1 < num2) {
        return num2;
    } else {
        return "Both numbers are equal";
    }
}
let number1 = 10;
let number2 = 20;

let maxNumber = findMax(number1, number2);
console.log("The maximum number is: " + maxNumber);
// ----------------------------------------------------------------------------------------------------------
// Write a Java Script Program to find maximum between three numbers.
// function findMax(num1, num2, num3) {
//     // Compare the three numbers
//     if (num1 >= num2 && num1 >= num3) {
//         return num1;
//     } else if (num2 >= num1 && num2 >= num3) {
//         return num2;
//     } else {
//         return num3;
//     }
// }

// // Example usage
// let number1 = 10;
// let number2 = 20;
// let number3 = 30;

// let maxNumber = findMax(number1, number2, number3);
// console.log("The maximum number is: " + maxNumber);
// ---------------------------------------------------------------------------------------------------------------
// Write a Java Script Program to check whether a number is negative, positive or zero.
// function checkNumber(num) {
//     if (num > 0) {
//         return "The number is positive.";
//     } else if (num < 0) {
//         return "The number is negative.";
//     } else {
//         return "The number is zero.";
//     }
// }

// // Example usage
// let number = -5;
// let result = checkNumber(number);
// console.log(result);
// ==============================================================================================================
// Write a Java Script Program to check whether a number is divisible by 5 and 11 or not.
// function isDivisibleBy5And11(num) {
//     if (num % 5 === 0 && num % 11 === 0) {
//         return "The number is divisible by both 5 and 11.";
//     } else {
//         return "The number is not divisible by both 5 and 11.";
//     }
// }

// // Example usage
// let number = 55;
// let result = isDivisibleBy5And11(number);
// console.log(result);
// =============================================================================================================
// Write a Java Script Program to check whether a number is even or odd.
// function isEvenOrOdd(num) {
//     if (num % 2 === 0) {
//         return "The number is even.";
//     } else {
//         return "The number is odd.";
//     }
// }

// // Example usage
// let number = 42;
// let result = isEvenOrOdd(number);
// console.log(result);
// ============================================================================================================
// Write a Java Script Program to check whether a year is leap year or not.
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return "The year " + year + " is a leap year.";
//     } else {
//         return "The year " + year + " is not a leap year.";
//     }
// }

// // Example usage
// let year = 2024;
// let result = isLeapYear(year);
// console.log(result);
// ===========================================================================================================
// Write a Java Script Program to check whether a character is alphabet or not.
// function isAlphabet(char) {
//     // Check if the character is a letter (case insensitive)
//     if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
//         return "The character '" + char + "' is an alphabet letter.";
//     } else {
//         return "The character '" + char + "' is not an alphabet letter.";
//     }
// }

// // Example usage
// let character = 'a';
// let result = isAlphabet(character);
// console.log(result); 
// ===============================================================================================================
// Write a Java Script Program to input any alphabet and check whether it is vowel or consonant.
// function checkVowelOrConsonant(char) {
//     // Convert the character to lowercase for case insensitive comparison
//     char = char.toLowerCase();

//     // Check if the character is an alphabet letter
//     if ((char >= 'a' && char <= 'z')) {
//         // Define vowels
//         const vowels = ['a', 'e', 'i', 'o', 'u'];

//         // Check if the character is a vowel
//         if (vowels.includes(char)) {
//             return "The character '" + char + "' is a vowel.";
//         } else {
//             return "The character '" + char + "' is a consonant.";
//         }
//     } else {
//         return "The character '" + char + "' is not an alphabet letter.";
//     }
// }

// // Example usage
// let character = 'E';
// let result = checkVowelOrConsonant(character);
// console.log(result);
// ===============================================================================================================
// Write a Java Script Program to input any character and check whether it is alphabet, digit or special character.
// function checkCharacterType(char) {
//     // Check if the character is a digit
//     if (char >= '0' && char <= '9') {
//         return "The character '" + char + "' is a digit.";
//     }
//     // Check if the character is an alphabet letter (case insensitive)
//     else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
//         return "The character '" + char + "' is an alphabet letter.";
//     }
//     // Otherwise, it is a special character
//     else {
//         return "The character '" + char + "' is a special character.";
//     }
// }

// // Example usage
// let character = '#';
// let result = checkCharacterType(character);
// console.log(result); 
// ===========================================================================================================
// Write a Java Script Program to check whether a character is uppercase or lowercase alphabet
// function checkCase(char) {
//     // Check if the character is an uppercase alphabet letter
//     if (char >= 'A' && char <= 'Z') {
//         return "The character '" + char + "' is an uppercase alphabet letter.";
//     }
//     // Check if the character is a lowercase alphabet letter
//     else if (char >= 'a' && char <= 'z') {
//         return "The character '" + char + "' is a lowercase alphabet letter.";
//     }
//     // Otherwise, it is not an alphabet letter
//     else {
//         return "The character '" + char + "' is not an alphabet letter.";
//     }
// }

// // Example usage
// let character = 'G';
// let result = checkCase(character);
// console.log(result); // Output: The character 'G' is an uppercase alphabet letter.

// character = 'g';
// result = checkCase(character);
// console.log(result);
// ==============================================================================================================
// Write a Java Script Program to input week number and print week day.
// function getWeekday(weekNumber) {
//     // Define weekdays array starting with Monday at index 1
//     const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//     // Check if weekNumber is within valid range
//     if (weekNumber >= 1 && weekNumber <= 7) {
//         return weekdays[weekNumber - 1];
//     } else {
//         return "Invalid week number. Please enter a number between 1 and 7.";
//     }
// }

// // Example usage
// let weekNumber = 3;
// let weekday = getWeekday(weekNumber);
// console.log("Weekday for week number " + weekNumber + " is: " + weekday);
// ==============================================================================================================
// Write a Java Script Program to input month number and print number of days in that month.
// function getDaysInMonth(monthNumber) {
//     // Array to store number of days in each month (considering non-leap year)
//     const daysInMonth = [31, 28, 31, 30, 31, 30, 
//                          31, 31, 30, 31, 30, 31];

//     // Check if monthNumber is within valid range (1 to 12)
//     if (monthNumber >= 1 && monthNumber <= 12) {
//         return daysInMonth[monthNumber - 1];
//     } else {
//         return "Invalid month number. Please enter a number between 1 and 12.";
//     }
// }

// // Example usage
// let monthNumber = 2; // February
// let days = getDaysInMonth(monthNumber);
// console.log("Number of days in month " + monthNumber + " is: " + days);
// ============================================================================================================
// Write a Java Script Program to count total number of notes in given amount.
// function countNotes(amount) {
//     // Array of currency denominations in descending order
//     const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
//     let noteCount = {}; // Object to store count of each denomination

//     // Initialize noteCount object with 0 for each denomination
//     denominations.forEach(denomination => {
//         noteCount[denomination] = 0;
//     });

//     // Calculate number of notes for each denomination
//     denominations.forEach(denomination => {
//         if (amount >= denomination) {
//             noteCount[denomination] = Math.floor(amount / denomination);
//             amount %= denomination;
//         }
//     });

//     // Print the count of each denomination
//     console.log("Total number of notes:");
//     denominations.forEach(denomination => {
//         if (noteCount[denomination] > 0) {
//             console.log(denomination + " : " + noteCount[denomination]);
//         }
//     });
// }

// // Example usage
// let amount = 2345; // Example amount
// countNotes(amount);
// ==============================================================================================================
// Write a Java Script Program to input angles of a triangle and check whether triangle is valid or not.
// function isTriangleValid(angle1, angle2, angle3) {
//     // Check if angles are positive and their sum is 180 degrees
//     if (angle1 > 0 && angle2 > 0 && angle3 > 0 && (angle1 + angle2 + angle3 === 180)) {
//         return "The triangle with angles " + angle1 + ", " + angle2 + ", " + angle3 + " degrees is valid.";
//     } else {
//         return "The triangle with angles " + angle1 + ", " + angle2 + ", " + angle3 + " degrees is not valid.";
//     }
// }

// // Example usage
// let angle1 = 60;
// let angle2 = 70;
// let angle3 = 50;
// let result = isTriangleValid(angle1, angle2, angle3);
// console.log(result); 
// ============================================================================================================
// Write a Java Script Program to find all roots of a quadratic equation.
// function findRoots(a, b, c) {
//     // Calculate discriminant
//     let discriminant = b * b - 4 * a * c;

//     // Initialize variables to store roots
//     let root1, root2;

//     // Check the value of discriminant
//     if (discriminant > 0) {
//         // Two distinct real roots
//         root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return "Roots are real and distinct: " + root1 + " and " + root2;
//     } else if (discriminant === 0) {
//         // One real root (repeated)
//         root1 = -b / (2 * a);
//         return "Roots are real and equal: " + root1;
//     } else {
//         // Two complex roots
//         let realPart = -b / (2 * a);
//         let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
//         return "Roots are complex: " + realPart + " + " + imaginaryPart + "i and " + realPart + " - " + imaginaryPart + "i";
//     }
// }

// // Example usage
// let a = 1;
// let b = -3;
// let c = 2;
// let roots = findRoots(a, b, c);
// console.log(roots); 
// ===============================================================================================================
// Write a Java Script Program to calculate profit or loss.
// function calculateProfitOrLoss(costPrice, sellingPrice) {
//     // Calculate profit or loss
//     let profit = sellingPrice - costPrice;
    
//     if (profit > 0) {
//         return "Profit of " + profit.toFixed(2) + " units.";
//     } else if (profit < 0) {
//         let loss = Math.abs(profit);
//         return "Loss of " + loss.toFixed(2) + " units.";
//     } else {
//         return "No profit, no loss.";
//     }
// }

// // Example usage
// let costPrice = 100;
// let sellingPrice = 150;
// let result = calculateProfitOrLoss(costPrice, sellingPrice);
// console.log(result);
// ================================================================================================================
// Write a Java Script Program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
// function calculateGrade(physics, chemistry, biology, mathematics, computer) {
//     // Calculate total marks and percentage
//     let totalMarks = physics + chemistry + biology + mathematics + computer;
//     let percentage = (totalMarks / 500) * 100;

//     // Determine grade based on percentage
//     let grade;
//     if (percentage >= 90) {
//         grade = 'Grade A';
//     } else if (percentage >= 80) {
//         grade = 'Grade B';
//     } else if (percentage >= 70) {
//         grade = 'Grade C';
//     } else if (percentage >= 60) {
//         grade = 'Grade D';
//     } else if (percentage >= 40) {
//         grade = 'Grade E';
//     } else {
//         grade = 'Grade F';
//     }

//     // Return the percentage and grade
//     return "Percentage: " + percentage.toFixed(2) + "%, " + grade;
// }

// // Example usage
// let physics = 85;
// let chemistry = 90;
// let biology = 75;
// let mathematics = 80;
// let computer = 70;

// let result = calculateGrade(physics, chemistry, biology, mathematics, computer);
// console.log(result);
// ==============================================================================================================