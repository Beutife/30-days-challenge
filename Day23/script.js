const divData = document.getElementById('number');

function isPrime(num){
  if(num<=1) return false;
  for(i=2; i<=Math.sqrt(num); i++){
    if(num % i === 0) return false;
  }
  return true; 
}

for(let i=0; i<=100; i++){
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('numbers');
    numberDiv.textContent=i;

    if (isPrime(i)) {
     numberDiv.style.backgroundColor = 'pink';
   }
   
   else if (i % 2 === 0) {
     numberDiv.style.backgroundColor = 'orange';
   }
   
   else {
     numberDiv.style.backgroundColor = 'yellow';
   };
   //console.log(num)
   divData.appendChild(numberDiv);
}

document.body.appendChild(divData)

document.getElementById('btn').addEventListener('click', () =>{
  const input = document.querySelector('input[type="search"]');
  const userInput = input.value;

   const doThis = document.createElement('div');
   doThis.textContent=userInput;

   doThis.style.fontSize = '24px';
   doThis.style.fontWeight = 'bold';
   doThis.style.color = 'white';
   doThis.style.padding = '10px';
   doThis.style.textAlign = 'center';
   doThis.style.backgroundColor = 'blue';
   doThis.style.boxShadow = '0 0 20px rgba(0, 0, 255, 0.7)';
   doThis.style.borderRadius = '10px';
   doThis.style.margin = '10px auto';
   doThis.style.width = 'fit-content';


   divData.innerHTML= '';
   divData.appendChild(doThis);
})
document.body.appendChild(doThis);