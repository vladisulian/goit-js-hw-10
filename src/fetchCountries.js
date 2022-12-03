export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
};

// function fetchCountries(name) {
//     return fetch('https://restcountries.com/v3.1/name/Ukraine')
//       .then(responce => {
//         // console.log(responce.json());
//         return responce.json();
//       })
//       .then(data => {
//         console.log('All information:', data[0]);
//         console.log('Country named as', data[0].name.official);
//         console.log('The capital is', data[0].capital[0]);
//         console.log('Population is ', data[0].population, 'peoples');
//         console.log('Country language is', data[0].languages);
//         console.log('Country Flag is', data[0].flags.svg);
//       });
//   }
