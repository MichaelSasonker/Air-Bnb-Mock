const axios = require('axios');


const isValidCountryName = async (searchedName) => {
    const url = `https://restcountries.eu/rest/v2/name/`;

    try {
        const { data } = await axios.get(url + searchedName);
        // console.log(data[0].name.toLowerCase())
        return true;
        
    } catch (err) { 
        throw new Error(err);
    }
}

// isValidCountryName('israel');
// isValidCountryName('aaa');

module.exports = isValidCountryName;