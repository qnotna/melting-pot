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
    },
    getSearchResults(callback, input){
        let url = (input.sources) ?
        "http://localhost:5000/newsapi/everything?q=" + input.query + 
        "&language=" + input.lang + 
        "&sortBy=" + input.sortBy + 
        "&size=" + input.size +
        "&sources=" + input.sources :
        
        "http://localhost:5000/newsapi/everything?q=" + input.query + 
        "&language=" + input.lang + 
        "&size=" + input.size +
        "&sortBy=" + input.sortBy;
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
                error: err
            })
        )
    }
}