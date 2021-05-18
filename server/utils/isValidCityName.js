const axios = require('axios');


const isValidCityName = async (searchedName) => {
    const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&namePrefix=`;

    try {
        const { data } = await axios.get(url + searchedName);
        const counts = data.metadata.totalCount;

        if (counts > 0 && counts <= 2) {
            return true;
        }
        return false;
        
    } catch (err) { 
        throw new Error(err);
    }
}

// isValidCityName('new aaaa');
// isValidCountryName('aaa');

module.exports = isValidCityName;