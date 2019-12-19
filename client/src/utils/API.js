import Axios from 'axios';

export default {
    getHot(callback){
        Axios.get("http://localhost:5000/newsapi/top-headlines?country=de&pageSize=5&apiKey=1a1523a02e3d4a65a047b106d46acaaa")
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
        Axios.get("http://localhost:5000/newsapi/latest?language=de&apiKey=1a1523a02e3d4a65a047b106d46acaaa")
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
    getSearchResults(callback, input){
        let url = (input.sources) ?
        "http://localhost:5000/newsapi/everything?q=" + input.query + 
        "&language=" + input.lang + 
        "&sortBy=" + input.sortBy + 
        "&sources=" + input.sources + 
        "&apiKey=1a1523a02e3d4a65a047b106d46acaaa":

        "http://localhost:5000/newsapi/everything?q=" + input.query + 
        "&language=" + input.lang + 
        "&sortBy=" + input.sortBy +
        "&apiKey=1a1523a02e3d4a65a047b106d46acaaa";
        console.log(url);
        Axios.get(url)
        .then(
            (res) => {
                callback({
                    name: "Results",
                    type: "list",
                    articles: res.data.articles,
                    // res: res
                })
            }
        ).catch(
            err => callback({
                error: err.response.data.error
            })
        )
    }
}