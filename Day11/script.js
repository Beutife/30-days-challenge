const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants;
console.log(e, pi,bodyTemp,boilingTemp, Temp);

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin, est,sw, den, nor]= countries;
console.log(fin, est,sw, den, nor);

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }
  let { width, height, area, perimeter } = rectangle;
  console.log(width, height, area, perimeter);

  const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

  for (const {name, scores, skills, age} of users){
    console.log( {name, scores, skills, age})
  }
  
  for (const {name, scores, skills, age,height} of users){
    console.log( {name, scores, skills, age, height});
  }

  
 let maxSkills = users[0];

 for(const user of users){
  const skillCount = user.skills.length;
  if(skillCount> maxSkills.skills.length){
    maxSkills = user;
  }

  if(skillCount<2){
    console.log(`${user.name} has less than 2 skills`)
  }
 }_


  const students1 = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  let [name1, skills, [,,jsScore, reactScore] ] = students1;
  console.log(name1, skills, jsScore, reactScore);

  const convertArrayToObject = students => {
    return students.map(([name, skills, scores])=>({name,skills, scores}));
  };
  const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  
console.log(convertArrayToObject(students));


const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

const newStudent = {
  ...student,
  skills: {
    ...student.skills,
    frontEnd: [...student.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
    backEnd: [...student.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...student.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...student.skills.dataScience, 'SQL']
  }
};

console.log(newStudent);