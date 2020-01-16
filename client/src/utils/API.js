import Axios from 'axios';
import store from '../store.js';

const src = 'http://localhost:5000/'

export default {
    getHot(callback){
        Axios.get(src + "newsapi/top-headlines?country=" + store.getState().user.settings.country + "&pageSize=5")
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
        Axios.patch(src + 'api/users/1234', params)
        .then(
            (res) => {
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
    },
    getCategory(component, callback){
        let category = component.toLowerCase();
        // let url = "http://localhost:5000/newsapi/top-headlines?category=" + category + "&pageSize=10"
        // console.log(url);
        Axios.get("http://localhost:5000/newsapi/top-headlines?category=" + category + "&pageSize=20&country=de")
        .then(
            (res) => {
                callback({
                    name: category[0].toUpperCase() + category.slice(1),
                    type: "grid",
                    articles: res.data.articles
                })
            }
        ).catch(
            err => callback({
                error: err
            })
        )
    }
}