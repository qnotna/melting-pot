const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1a1523a02e3d4a65a047b106d46acaaa').v2;

newsapi.topHeadlines({
  sources: 'die-zeit',
  q: '',
  category: '',
  language: '',
  country: 'de'
}).then(response => {
  console.log(response);
});

modue.exports = newsapi;
