// import Axios from 'axios';
import store from '../store.js';
const NewsAPI = require('newsapi');
const apiKey = '04cc2e205e294f27b2072a47d8ce57bd';
const newsapi = new NewsAPI(apiKey);

export default {
    getHot(callback) {
        newsapi.v2.topHeadlines({
            country: store.getState().settings.search.country,
            pageSize: 5
        })
        .then(
            (res) => {
                console.log(res)
                callback({
                    name: "Hot",
                    type: "horizontal",
                    articles: res.articles,
                    totalResults: res.totalResults
                })
            }
        ).catch(
            err => {
                console.log(err)
                // callback( {error: err} )
            }
        )
    },

    getLatest(callback) {
        newsapi.v2.everything({
            language: store.getState().settings.search.language,
            q: "*",
            sortBy: "publishedAt",
        })
        .then(
            (res) => {
                callback({
                    name: "Latest",
                    type: "grid",
                    articles: res.articles,
                    totalResults: res.totalResults
                })
            }
        ).catch( 
            err => {
                console.log(err)
                // callback( {error: err} )
            }
        )
    },

    getSearchResults(callback, params) {
        newsapi.v2.everything({
            ...params
        })
        .then(
            (res) => {
                callback({
                    name: "Results",
                    type: "grid",
                    articles: res.articles,
                    totalResults: res.totalResults

                })
            }
        ).catch(
            err => {
                console.log(err)
                // callback( {error: err} )
            }
        )
    },

    getSources(urlParams, callback) {
        newsapi.v2.sources({
            ...urlParams
        })
        .then( res => {
            callback({
                status: res.status,
                sources: res.sources
            })
        })
        .catch( 
            err => {
                console.log(err)
                // callback( {error: err} )
            }
        )
    },

    getCategory(urlParams, callback) {
        let category = urlParams.component.toLowerCase();

        newsapi.v2.topHeadlines({
            pageSize: 20,
            country: "de",
            category,
            page: urlParams.page
        })
            .then(res => {
                callback({
                    name: category[0].toUpperCase() + category.slice(1),
                    type: "grid",
                    articles: res.articles,
                    totalResults: res.totalResults
                })
            })
            .catch(
                err => {
                    console.log(err)
                    // callback( {error: err} )
                }
            )
    }

}

// export default {
//     getHot(callback){
//         Axios.get(src + "top-headlines?country=" + store.getState().settings.search.country + "&pageSize=5")
//         .then(
//             (res) => {
//                 callback({
//                     name: "Hot",
//                     type: "horizontal",
//                     articles: res.data.articles,
//                     totalResults: res.data.totalResults
//                 })
//             }
//         ).catch(
//             err => callback({
//                 error: err
//             })
//         )
//     },
//     getLatest(callback){
//         Axios.get(src + "newsapi/latest?language=" + store.getState().settings.search.language)
//         .then(
//             (res) => {
//                 callback({
//                     name: "Latest",
//                     type: "grid",
//                     articles: res.data.articles,
//                     totalResults: res.data.totalResults
//                 })
//             }
//         ).catch(
//             err => callback({
//                 error: err
//             })
//         )
//     },
//     getSearchResults(callback, params){
//         Axios.get(src + "newsapi/everything", { params })
//         .then(
//             (res) => {
//                 callback({
//                     name: "Results",
//                     type: "grid",
//                     articles: res.data.articles,
//                     totalResults: res.data.totalResults

//                 })
//             }
//         ).catch(
//             err => callback({
//                 error: err
//             })
//         )
//     },
//     updateUserData(callback, params){
//         Axios.patch(src + 'api/users/1234', params)
//         .then(
//             (res) => {
//                 callback({
//                     newUserData: res.data.updatedUserData
//                 })
//             }
//         )
//         .catch(
//             err => callback({
//                 error: err
//             })
//         )
//     },
//     getCategory(urlParams, callback){
//         // console.log(urlParams);
//         let category = urlParams.component.toLowerCase();
//         Axios.get("http://localhost:5000/newsapi/top-headlines?&pageSize=20&country=de&category=" + category + "&page=" + urlParams.page)
//         .then(res => {
//                 callback({
//                     name: category[0].toUpperCase() + category.slice(1),
//                     type: "grid",
//                     articles: res.data.articles,
//                     totalResults: res.data.totalResults
//                 })
//         })
//         .catch(
//             err => callback({
//                 error: err
//             })
//         )
//     },
//     getSources(urlParams, callback){
//         Axios.get(src + "newsapi/source", urlParams)
//             .then( res => {
//                 callback({
//                     status: res.status,
//                     sources: res.data.sources
//                 })
//             })
//             .catch( err => callback({
//                 error: err
//             }))
//     }
// }