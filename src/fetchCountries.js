export default
function fetchCountries(united){
    return fetch(`https://restcountries.com/v3.1/name/${united}?fields=name,capital,population,languages,flags`)
    .then(response => {
    if ( !response.ok ) {
      console.log( !response.ok )
      throw new Error();
    }
    return response.json();}
    )
}
    
  