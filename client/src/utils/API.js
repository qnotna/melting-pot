import Axios from 'axios';

export default {
    getHot(callback){
        Axios.get("http://localhost:5000/newsapi/top-headlines?country=de&pageSize=5")
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
        Axios.get("http://localhost:5000/newsapi/latest?language=de")
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
    }
}