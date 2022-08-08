export default
function fetchCountries(united){
    fetch(`https://restcountries.com/v3.1/name/${united}?fields=name,capital,population,languages,flags`)
    .then(response => {
    if (!response.ok) {
      throw new Error(error);
    }
    return response.json();}
    )
}
    
  