import Axios from 'axios';
import store from '../store.js';

const src = 'http://localhost:5000/'

export default {
    getHot(callback){
        Axios.get(src + "newsapi/top-headlines?country=de&pageSize=5")
        .then(
            (res) => {
                callback({
                    name: "Hot",
                    type: "horizontal",
                    articles: res.data.articles
                })
            }
        ).catch(
            err => console.log(err)
        )
    },
    getLatest(callback){
        console.log(store.getState().user.settings.language)
        Axios.get(src + "newsapi/latest?language=" + store.getState().user.settings.language)
        .then(
            (res) => {
                callback({
                    name: "Latest",
                    type: "grid",
                    articles: res.data.articles
                })
            }
        ).catch(
            err => console.log(err)
        )
    },
    getSearchResults(callback, params){
        Axios.get(src + "newsapi/everything", { params })
        .then(
            (res) => {
                callback({
                    name: "Results",
                    type: "grid",
                    articles: res.data.articles,
                    // res: res
                })
            }
        ).catch(
            err => callback({
                error: err
            })
        )
    },
    updateUserData(callback, params){
        console.log('in updateUserData')
        Axios.patch(src + 'api/users/1234', params)
        .then(
            (res) => {
                console.log('in API res')
                console.log(res.data)
                callback({
                    newUserData: res.data.updatedUserData
                })
            }
        )
        .catch(
            err => callback({
                error: err
            })
        )
    }
}