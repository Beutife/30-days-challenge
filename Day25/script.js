let myBarChart = null; 

function resetCanvas() {
  const chartContainer = document.getElementById('chartContainer');
  chartContainer.innerHTML = '<canvas id="myBarChart"></canvas>';
}



// Fetch population data
fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('btnPop').addEventListener('click', () => {

      
      document.getElementById('pop').style.display = 'block';
      document.getElementById('lang').style.display = 'none';

      // Destroy any existing chart before creating a new one
      if (myBarChart) {
        myBarChart.destroy();
      }

      
      const topTenCountries = data.filter(country => country.population)
                                  .sort((a, b) => b.population - a.population)
                                  .slice(0, 10);
                                  console.log('play')

      const countryNames = topTenCountries.map(country => country.name);
      const countryPop = topTenCountries.map(country => country.population);

      const ctx = document.getElementById('myBarChart').getContext('2d');

      
      const charData = {
        labels: countryNames, // X-axis
        datasets: [{
          label: 'Country Population', // label for dataset
          data: countryPop, // Y-axis
          backgroundColor: 'orange',
          borderColor: 'orange',
          borderWidth: 1,
          barPercentage: 0.5,
          categoryPercentage: 0.5
        }]
      };

      const config = {
        type: 'bar',
        data: charData,
        options: {
          indexAxis: 'y', // Horizontal chart
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      };

      myBarChart = new Chart(ctx, config); 
    });
  })
  .catch(error => console.error('Error loading Data:', error));



fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('btnLang').addEventListener('click', () => {

      
      document.getElementById('lang').style.display = 'block';
      document.getElementById('pop').style.display = 'none';

      // Destroy any existing chart before creating a new one
      if (myBarChart) {
        myBarChart.destroy();
      }

      
      const mostSpokenLang = data.filter(country => country.languages && country.languages.length > 0)
                                 .sort((a, b) => b.languages.length - a.languages.length)
                                 .slice(0, 10);

      const countryNames = mostSpokenLang.map(country => country.name);
      const countryLang = mostSpokenLang.map(country => country.languages.length);

      const ctx = document.getElementById('myBarChart').getContext('2d');

      // Create the new chart
      const charData = {
        labels: countryNames, // X-axis
        datasets: [{
          label: 'Most Spoken Languages', // label for dataset
          data: countryLang, // Y-axis for languages
          backgroundColor: 'orange',
          borderColor: 'orange',
          borderWidth: 1,
          barPercentage: 0.5,
          categoryPercentage: 0.5
        }]
      };

      const config = {
        type: 'bar',
        data: charData,
        options: {
          indexAxis: 'y', 
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      };

      myBarChart = new Chart(ctx, config); 
    });
  })
  .catch(error => console.error('Error loading Data:', error));
