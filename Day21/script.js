const firstpara =document.querySelector('p');
console.log('First paragraph using tag name:', firstpara.textContent);
const Firstpara = document.querySelector('#para1');
const Secpara = document.querySelector('#para2');
const thirdpara = document.querySelector('#para3');
const Fourpara = document.querySelector('#para4');

        console.log("Paragraph 1: ", Firstpara.textContent);
        console.log("Paragraph 2: ", Secpara.textContent);
        console.log("Paragraph 3: ", thirdpara.textContent);
        console.log("Paragraph 4: ", Fourpara.textContent);


const allpara = document.querySelector('p');

allpara.forEach((para,index) => {
    para[i].textContent =index;
    
});

para4.textContent = 'Fourth Paragraph';
para3.textContent = 'Fifth Paragraph';

const classId = document.querySelector('p');
classId[3].setAttribute('class', 'paragraph');
classId[3].setAttribute('id', 'Four-paragraph');

classId.style.color = 'green';
classId.style.background = 'red';
classId.style.fontFamily = 'serif';