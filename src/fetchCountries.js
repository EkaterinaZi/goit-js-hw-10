import sortingCountrysArray from './index'

export default
function fetchCountries(united){
    fetch(`https://restcountries.com/v3.1/name/${united}?fields=name,capital,population,languages,flags`)
    .then(response => {
    if (!response.ok) {
      throw new Error(Notiflix.Notify.failure(`Oops, there is no country with that name`));
    }
    return response.json();}
    )
    .then((data) => {
       console.log(data)
       return sortingCountrysArray(data) 
    }
    )
    .catch((error) => { error});}
    
  