import Axios from 'axios';

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
        Axios.get(src + "newsapi/latest?language=de")
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
    }
}