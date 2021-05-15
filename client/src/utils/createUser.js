import Axios from 'axios';

const createUser = async (valuesObj, targetURL) => {
    try {
        const newUser = await Axios({
            method: 'post',
            url: targetURL,
            data: {
                ...valuesObj
            }
        });

        return newUser;
    } catch (err) {
        return { error: err.response.data };
    }
}

export default createUser;