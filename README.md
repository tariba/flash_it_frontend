Refactoring PLAN

1. Inside the nextClick fn

Comment out line 77, which is an array with 2 values inside: Technical and Behavioural

Line 78, change arr.length to data.length

FROM THIS
//let arr = ["Technical", "Behavioural"];
//let chosen = arr[Math.floor(Math.random() * arr.length)];
//const result = data.filter((object) => object.subject === chosen);

=> TO THIS const index = Math.floor(Math.random() \* data.length);
let resultObject = data[index];
setRandomQA(resultObject);

2. Changed the state flip to flipped

3. Changed the flipIt name to flipAnswerCard

4. Inside navClick fn

FROM THIS
// const result = data.filter(
// (object) =>
// object.subject === "Technical" || object.subject === "Behavioural"
// );

=> TO THIS const index = Math.floor(Math.random() \* data.length);
let resultObject = data[index];

5. We create another function that returns a random data object from any array passed to it, so we can call it wherever we need it

FROM THIS TWO LINES REPEATED TWICE
// let randomDataObject = data[Math.floor(Math.random() * data.length)];

// let randomResultObject = data[Math.floor(Math.random() * result.length)];

TO THIS function getRandomObject(dataArr) {
return dataArr[Math.floor(Math.random() * dataArr.length)];
}

6. Created a function that takes in 2 arguments dataArr and subject, which is going to filter the data inside the array and return a object with a specific subject

FROM THIS
Line 66 // const resultArr = data.filter((object) => object.subject === subject);

Line 82 //const resultArr data.filter( (object) => object.subject === subjectState);

TO THIS =>  
function filterArrBySubject(dataArr, subject) {
return dataArr.filter((object) => object.subject === subject);
}
const resultArr = filterArrBySubject(data, subject); LINE 66
const resultArr = filterArrBySubject(data, subjectState); line 82
