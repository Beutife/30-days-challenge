const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(countriesAPI)
.then(response => response.json())
.then(countries => {
    const largestCountries = countries
    .filter(country =>country.area)
    .sort((a,b)=> b.area - a.area)
    .slice(0,10);

    const countryNames = largestCountries.map(country => ({
        name:country.name,
        area:country.area
    }))

    console.log(countryNames);

    
    const totalLanguage = countries
    .map(country => country.languages)
    .flat()

    const uniqueLanguage = new Set(totalLanguage.map(lang => lang.name));
    console.log(`Total number of unique languages: ${uniqueLanguages.size}`);

})
.catch(error => console.error(error));

const fetchData = async () => {
    try {
        const response =await fetch(catsAPI)
        const cats = await response.json()
        
        const catName = cats.map(cat => cat.name)
        console.log(catName);

        const totalWeight = cats.reduce((total, cat) => {
            const weightRange = cat.weight.metric.split(' - ').map(Number);
            const firstWeight = weightRange[0];  // Just take the first weight
            return total + firstWeight;
          }, 0);
          const averageCatWeight = totalWeight / cats.length;
    console.log(`Average Cat Weight (in metric): ${averageCatWeight} kg`);
        
    } catch(err){
        console.error(err)
    }
}
console.log('===== async and wait')
fetchData()

