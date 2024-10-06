document.getElementById('calculateBtn').addEventListener('click', () => {

     const mass = document.getElementById('mass').value;
     const weight = document.getElementById('planet').value;

     if(mass){
        const weightPlanet=  mass*weight
        document.getElementById('weightResult').innerText = weightPlanet;
     }else {
        return ('Input mass')
     }
})