import Axios from 'axios';

const src = 'http://localhost:5000/'

export default {
    login(callback, loginData){
        console.log(loginData)
        Axios.post(src + "api/auth/login", loginData)
        .then(
            (res) => {
                callback({
                    res
                })
            }
        )
        .catch(
            err => console.log(err)
        )
    }

}