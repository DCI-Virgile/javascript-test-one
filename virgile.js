/*-------------------------------------------------------
JavaScript Test
Complete all questions to the best of your abilities. You can use google, but you cannot ask other students or teachers for help. Also, do not copy code. Using Slack or something similar is not allowed! Everybody cheating gets 0 points, also the people who help.
Create an Name.js file (in my case it would be Martina.js) and work from there. Please do not forget to comment in the question number above your answers.


----------------------------------------------------------
Question 1 :
    Write a program to display the city name if the string begins with "Los" or "New" otherwise return "The city name does not begin with Los or New".
-----------------------------------------------------*/
let cityName = 'New Orleans';
let cityNameBeg = cityName.slice(0, 3).toLowerCase();
let isLosOrNew = (cityNameBeg === 'new' || cityNameBeg === 'los') ? cityName : "The city name does not begin with Los or New";

console.log('Question 1:');
console.log(isLosOrNew);



/* Question 2 : ----------------------------------------------
    Write a program to compute the sum of three elements of a given array of integers. The length of the array must be 3.
    Example
    [5, 10, 15] ➞ 30
------------------------------------------------------------*/
let arrayTriple = [3, 87, 23];
let sum = (arrayTriple.length === 3) ? arrayTriple[0] + arrayTriple[1] + arrayTriple[2] : 'The length of the variable array must be exactly 3 and be comprised of integers';

console.log('');
console.log('Question 2:');
console.log(sum);



/* Question 3 : ---------------------------------------------
    Given two strings, firstName and lastName, return a single string in the format "last, first".

    Examples
    "John", "Doe" ➞ "Doe, John"
    "Mary", "Jane" ➞ "Jane, Mary"
-------------------------------------------------------------*/
let firstName = 'Virgili';
let lastName = 'Xakepmah';

console.log('');
console.log('Question 3:');
console.log(`${lastName}, ${firstName}`);



/* Question 4 : -----------------------------------------------
    Write a program that takes an integer and returns true if it's divisible by 100, otherwise return false.

    Examples
    1 ➞ false
    1000 ➞ true
    100 ➞ true
-------------------------------------------------------------*/
let integer = 3200;
let ifDiv100 = (integer % 100 === 0) ? true : false;

console.log('');
console.log('Question 4:');
console.log(ifDiv100);



/* Question 5 : -----------------------------------------------
    Write a program that adds a string ending to each item in an array.

    Examples & Expected output
    ["clever", "meek", "hurried", "nice"], "ly" ➞ ["cleverly", "meekly", "hurriedly", "nicely"]
    ["new", "pander", "scoop"], "er" ➞ ["newer", "panderer", "scooper"]
    ["bend", "sharpen", "mean"], "ing" ➞ ["bending", "sharpening", "meaning"]
-------------------------------------------------------------*/
let wordArray = ["clever", "meek", "hurried", "nice"];
let wordlyArray = [];
for (let i = 0; i < wordArray.length; i++) {
    let slicy = wordArray.slice(i, i + 1);
    wordlyArray.push(slicy + 'ly')
}

console.log('');
console.log('Question 5:');
console.log(wordlyArray);



/* Question 6 : -----------------------------------------------
    Write a program that checks whether a number is even or odd and returns "even" for even numbers and "odd" for odd numbers.

    Examples & Expected Output
    3 ➞ "3 is odd"
    146 ➞ "146 is even"
    19 ➞ "19 is odd"
-------------------------------------------------------------*/
let num = 33;
let isEven = (num % 2 === 0) ? `${num} is even` : `${num} is odd`;

console.log('');
console.log('Question 6:');
console.log(isEven);



/* Question 7 : -----------------------------------------------
    You are given 2 out of 3 angles of a triangle, in degrees e.g. 29° and 59°. Write a program that classifies the missing angle (the third angle of a triangle) as either "acute", "right", or "obtuse" based on its degrees.

    Notes

    An acute angle is smaller than 90°.

    A right angle is exactly 90°.

    An obtuse angle is greater than 90° (but smaller than 180°).

    For example: 11°, 20° should return "obtuse", since the missing angle would be 149°, which makes it obtuse.

    Examples

    27°, 59° ➞ Then the third angle is 92° so it is "obtuse"

    135°, 11° ➞ The third angle is "acute"

    45°, 45° ➞ The third angle is a "right angle"
-------------------------------------------------------------*/
let angleOne = 45;
let angleTwo = 32;

console.log('');
console.log('Question 7:');

if (180 - angleOne - angleTwo < 90) {
    console.log(`The third angle is "acute"`);
} else if (180 - angleOne - angleTwo === 90) {
    console.log(`The third angle is a "right angle"`);
} else if (180 - angleOne - angleTwo > 90) {
    console.log(`The third angle is "obtuse"`);
} else {
    console.log(`You sure you're looking at a triangle?`);
}



/* Question 8 : -----------------------------------------------
    Make a variable with the string value of "maria jane jones". Convert each first letter to uppercase. Make sure your code works for any three names e.g. "john james smith".
-------------------------------------------------------------*/
let fancyName = 'virgili andryevitch xakepmah'
let fancyArray = fancyName.split(' ');
let fancyCapitalized = [];
for (i = 0; i < 3; i++) {
    let fancyPop = fancyArray.pop().toString();
    fancyPop = fancyPop.charAt(0).toUpperCase() + fancyPop;
    fancyPop = fancyPop.substr(0, 1) + fancyPop.substr(2);
    fancyCapitalized.unshift(fancyPop);
}
fancyCapitalized = fancyCapitalized.toString();
fancyCapitalized = fancyCapitalized.replace(/,/g, " ");

console.log('');
console.log('Question 8:');
console.log(fancyCapitalized);



/* Question 9 : -----------------------------------------------
    Write a program that takes a string and returns the word count. The string will be a sentence.

    Examples Expected output
    "This is an example" ➞ 4
    "One more example for good measure" ➞ 6
    "JavaScript is fun, right?" ➞ 4
-------------------------------------------------------------*/
let sentence = 'lemme do this real quick'
let wordcount = sentence.split(' ').length;

console.log('');
console.log('Question 9:');
console.log(wordcount);



/* Question 10 : -----------------------------------------------
    Write a program to multiply each value in an array by the number of items in that array.

    Examples
    [2, 3, 1, 0] (2 * 4), (3 * 4), (1 * 4), (0 * 4) ➞ [8, 12, 4, 0]
    [4, 1, 1] ➞ [12, 3, 3]
    [1, 0, 3, 3, 7, 2, 1] ➞ [7, 0, 21, 21, 49, 14, 7]
    [0] ➞ [0]
-------------------------------------------------------------*/
let array = [3, 8, 6, 3];
let arrayMult = [];
for (let i = 0; i < array.length; i++) {
    arrayMult.push(array[i] * array.length);
}

console.log('');
console.log('Question 10:');
console.log(arrayMult);