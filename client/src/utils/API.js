import Axios from 'axios';
import store from '../store.js';

const src = 'http://localhost:5000/'

export default {
    getHot(callback){
        Axios.get(src + "newsapi/top-headlines?country=" + store.getState().settings.search.country + "&pageSize=5")
        .then(
            (res) => {
                callback({
                    name: "Hot",
                    type: "horizontal",
                    articles: res.data.articles,
                    totalResults: res.data.totalResults
                })
            }
        ).catch(
            err => console.log(err)
        )
    },
    getLatest(callback){
        Axios.get(src + "newsapi/latest?language=" + store.getState().settings.search.language)
        .then(
            (res) => {
                callback({
                    name: "Latest",
                    type: "grid",
                    articles: res.data.articles,
                    totalResults: res.data.totalResults
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
                    totalResults: res.data.totalResults

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
    getCategory(urlParams, callback){
        console.log(urlParams);
        let category = urlParams.component.toLowerCase();
        // let url = "http://localhost:5000/newsapi/top-headlines?category=" + category + "&pageSize=10"
        // console.log(url);
        Axios.get("http://localhost:5000/newsapi/top-headlines?&pageSize=20&country=de&category=" + category + "&page=" + urlParams.page)
        .then(
            (res) => {
                callback({
                    name: category[0].toUpperCase() + category.slice(1),
                    type: "grid",
                    articles: res.data.articles,
                    totalResults: res.data.totalResults
                })
            }
        ).catch(
            err => callback({
                error: err
            })
        )
    }
}