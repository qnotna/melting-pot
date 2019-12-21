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
        let url = "http://localhost:5000/newsapi/everything?q=" + input.query + 
        "&language=" + input.lang + 
        "&sortBy=" + input.sortBy + 
        "&size=" + input.size
        console.log(input.from);
        console.log(input.to);

        if(input.source){
            url += "&source=" + input.source;
        }
        if(input.from) {
            url += "&from=" + input.from;
        }   
        if(input.to) {
            url += "&to=" + input.to;
        }   
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