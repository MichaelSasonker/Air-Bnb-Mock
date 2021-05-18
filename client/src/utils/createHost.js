import Axios from 'axios';

const createHost = async (valuesObj, token,  targetURL) => {

    try {
        // console.log(token)
        console.log(valuesObj)
        const newHost = await Axios({
            method: 'post',
            url: targetURL,
            headers: {
                Authorization: `Bearer ${token}`, 
                ContentType: 'multipart/form-data'
            },
            data: {
                ...valuesObj
            }
        });
        return newHost;
    } catch (err) {
        return { error: err };
    }
}

export default createHost;