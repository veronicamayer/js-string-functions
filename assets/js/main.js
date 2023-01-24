/* Uebung 1 Lev 1.1 */
console.log("====== Uebung 1 Lev 1.1 =====");
const firstName = "Veronica";
const lastName = "Mayer";
const fullName = `${firstName} ${lastName}`;

console.log(firstName);
console.log(firstName.length);
console.log(lastName);
console.log(lastName.length);
console.log(fullName);
console.log(fullName.length);

/* Uebung 1 Lev 1.2 */
console.log("====== Uebung 1 Lev 1.2 ======");
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean."

console.log(txt.indexOf("h")); 
console.log(txt.indexOf("Earth"));
console.log(txt.indexOf("Moon"));

/* Uebung 1 Lev 1.4 */
const A = 'Susi is going to codingschool';

let susi = A.slice(0, 4);
let is = A.slice(5, 7);
let isGoingToSchool = A.slice(5, 17) + A.slice(23, 29);
let school = A.slice(23, 29);
let SusiIsSchool = A.slice(0, 5) + A.slice(5, 8) + A.slice(23, 29);

const variables = [susi, is, isGoingToSchool, school, SusiIsSchool]
const pTags = document.querySelectorAll("p");
const PTagsToUpdate = Array.from(pTags).slice(1);

variables.forEach((val, index) => {
    PTagsToUpdate[index].innerHTML = val;
});

/* Uebung 1 Lev 1.7 */
const text = "Sam is good at codingschool";

let badSchool = text.replace("good", "bad").replace("codingschool", "school");
let susiSchool = text.replace("Sam", "Susi").replace("codingschool", "school");
let goodTennis = text.replace("codingschool", "tennis");

const newVariables = [badSchool, susiSchool, goodTennis];
const newPTagsToUpdate = Array.from(pTags).slice(7);

newVariables.forEach((val, index) => {
    newPTagsToUpdate[index].innerHTML = val;
});

/* Uebung 1 Lev 1.8 */
const anotherText = "Sam is going to codingschool";

let uppercase = anotherText.replace("codingschool", "school").toUpperCase();
let lowercase = anotherText.replace("to codingschool", "at school").toLowerCase();
let mixedCaseCapital = anotherText.slice(0, 4).toUpperCase() + anotherText.slice(4, 16) + anotherText.replace("codingschool", "school").slice(16, 23).toUpperCase();
let mixedCaseSmall = anotherText.slice(0, 4) + anotherText.slice(4, 16).toUpperCase() + anotherText.replace("codingschool", "school").slice(16, 23);
let firstUppercaseWords = anotherText.replace("codingschool", "school").split(" ");
    firstUppercaseWords = firstUppercaseWords.map(word => word.charAt(0).toUpperCase() + word.slice(1));
let firstUppercase = firstUppercaseWords.join(" ");


const anotherVariables = [uppercase, lowercase, mixedCaseCapital, mixedCaseSmall, firstUppercase];
const anotherPTagsToUpdate = Array.from(pTags).slice(11);

anotherVariables.forEach((val, index) => {
    anotherPTagsToUpdate[index].innerHTML = val;
});

/* Uebung 1 Lev 1.9 */
const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

let concat1 = text1.replace("codingschool", "school").concat(" ", text4, " to the movie theater");
let concat2 = text1.replace("codingschool", "movie theater");
let concat3 = text2.concat(" ", text4, " ", text1.replace("is", "are").replace("codingschool", "school"));
let concat4 = text2.concat(" ", text4, " ", text1.replace("is", "are").replace("codingschool", "gym"), " ", text4, " to the movie theater");
let concat5 = text2.concat(" ", text1.slice(4).replace("codingschool", "school"), " ", text4, " to the movie theater");

const lastVariables = [concat1, concat2, concat3, concat4, concat5];
const lastPTagsToUpdate = Array.from(pTags).slice(17);

lastVariables.forEach((val, index) => {
    lastPTagsToUpdate[index].innerHTML = val;
});
