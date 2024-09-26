const dateTime = new Date(); 
const localTimeElement = document.getElementById('year');
const dateTimeElement = document.getElementById('date-time'); 
const challengeItems = document.querySelectorAll('li');

if (localTimeElement && dateTimeElement) {
    const title = document.querySelector('h1'); 

    // Set an id for the title if it exists
    if (title) {
        title.setAttribute('id', 'title'); 
    }

    const colors = ['red', 'green', 'blue', 'orange', 'purple', 'yellow', 'pink'];

    // Change text color of localTimeElement at 1-second intervals
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        localTimeElement.style.color = randomColor; 
    }, 1000);

    // Change background color of dateTimeElement at 1-second intervals
    setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        dateTimeElement.style.backgroundColor = randomColor; 
    }, 1000);
}


challengeItems.forEach(item => {
    if (item.textContent.includes('Done')) {
      item.style.backgroundColor = 'green';
    } else if (item.textContent.includes('Ongoing')) {
      item.style.backgroundColor = 'yellow';
    } else if (item.textContent.includes('Coming')) {
      item.style.backgroundColor = 'red';
    }
  });

  const updateDateTime = () => {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    dateTimeElement.textContent = dateTimeString;
  };
  
  
  setInterval(updateDateTime, 1000);
