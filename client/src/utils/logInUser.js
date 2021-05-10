import Axios from 'axios';

const logInUser = async (valuesObj, targetURL) => {
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

        return err;
    }
}

export default logInUser;