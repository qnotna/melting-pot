import Axios from 'axios';

const cors_proxy = 'https://cors-anywhere.herokuapp.com/'

export default {
    getPageHtml(callback, url){
        Axios.get(cors_proxy + url)
        .then(
            res => callback(res.data)
        )
        .catch(
            err => console.log(err)
        )

    },
}