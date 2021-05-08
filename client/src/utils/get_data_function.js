import Axios from 'axios';

const GetData = async (url) => {

    let respone = await Axios.get(url);
    return (respone.data);
}

export default GetData;