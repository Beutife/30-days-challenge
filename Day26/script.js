fetch('./data.json')
.then(response => {
  if(!response.ok) throw new Error('failed to load json');
  return response.json();
})
.then(
  data => {
    const dataCountry = data.countries;
    const searchInput = document.getElementById('searching');
    //const totalCountry = document.getElementById('countryNo');
    const totalCount = document.getElementById('totalCount');
    const counted = document.getElementById('counted')
    const startCountry = document.getElementById('startCountry');

    totalCount.textContent = dataCountry.length;

    searchInput.addEventListener('input',  () => {

      const searchValue = searchInput.value.trim().toLowerCase();
      const filteredCountries = dataCountry.filter(country=> 
        country.toLowerCase().startsWith(searchValue)  
      )

      counted.textContent = filteredCountries.length;
   
      
      startCountry.textContent = searchInput

      document.getElementById('countryContainer').textContent = filteredCountries
      ? filteredCountries.map(country => ` ${country}`).join('')
      : '<p> No matching country </p>'
    })

  }

).catch(error => console.error('Error:', error));