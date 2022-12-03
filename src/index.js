import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetchCountries();
function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/Ukraine')
    .then(responce => {
      // console.log(responce.json());
      return responce.json();
    })
    .then(data => {
      console.log('All information:', data[0]);
      console.log('The capital is ', data[0].capital);
      console.log('Population is ', data[0].population, 'peoples');
      console.log('Country language is', data[0].languages);
    });
}
