// JavaScript Object Notation
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true;
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python']
}

const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`

// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
const stringifiedSkills = JSON.stringify(skills);
console.log(stringifiedSkills);

// Stringify the age variable
const stringifiedAge = JSON.stringify(age);
console.log(stringifiedAge);

// Stringify the isMarried variable
const stringifiedIsMarried = JSON.stringify(isMarried);
console.log(stringifiedIsMarried);

// Stringify the student object
const stringifiedStudent = JSON.stringify(student);
console.log(stringifiedStudent);

// Exercises Level 2
// Stringify the student object with only firstName, lastName, and skills properties
const stringifiedStudentPartial = JSON.stringify(student, ['firstName', 'lastName', 'skills']);
console.log(stringifiedStudentPartial);

// Exercises Level 3
// Parse the txt JSON to object.
const parsedTxt = JSON.parse(txt);
console.log(parsedTxt);

// Find the user who has the most skills
let mostSkilledUser = '';
let maxSkills = 0;

for (const user in parsedTxt) {
    const userSkills = parsedTxt[user].skills;
    if (userSkills.length > maxSkills) {
        maxSkills = userSkills.length;
        mostSkilledUser = user;
    }
}

console.log(`The user with the most skills is: ${mostSkilledUser}`);
