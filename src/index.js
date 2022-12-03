import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetchCountries();
function fetchCountries(name) {
  return fetch('https://restcountries.com/v3.1/name/sweden')
    .then(responce => {
      // console.log(responce.json());
      return responce.json();
    })
    .then(data => {
      console.log(data[0]);
    });
}
