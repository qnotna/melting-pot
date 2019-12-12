const router = require ('express').Router();
const NewsAPI  = require('newsapi');
const newsapi = new NewsAPI('e81d0366f1cc4a2489cd51d4154f5693');

// country: sind ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
// language: ar de en es fr he it nl no pt ru se ud zh
// category: business entertainment general health science sports technology

//https://newsapi.org/docs/endpoints/top-headlines

// get Latest
router.get('/latest', (req, res) => {
    newsapi.v2.everything({
        ...req.query,
        q: "*",
        sortBy: "publishedAt",

    })
    .then(
        response => res.json(response)
    )
    .catch(
        err => res.json(err)
    );
});


// top Headlines aus einem bestimmten land und Sprache
router.get('/top-headlines', (req, res) => {
    newsapi.v2.topHeadlines({
        ...req.query
    })
    .then(
        response => res.json(response)
    )
    .catch(
        err => res.json(err)
    );
});

// top Headlines aus einem bestimmten land und Sprache und einer bestimmten Kategorie
router.get('/topHeadlines/:category', (req, res) => {
    var userLand = 'de';
    var userLanguage = 'de';
    newsapi.v2.topHeadlines({
        //sources: 'bbc-news,the-verge',
        //q: 'bitcoin',
        category: req.params.category,
        language: userLand,
        country: userLanguage
    }).then(response => {
        console.log(response);
    });
});

// https://newsapi.org/docs/endpoints/everything

// Gebe die ersten beiden Ergebnisse des gesuchten Keywords zurück
router.get('/everything/:query', (req, res) => {
    var userLanguage = 'en';
    newsapi.v2.everything({
        q: req.params.query,
        //sources: 'bbc-news,the-verge',
        //domains: 'bbc.co.uk, techcrunch.com',
        //from: '2017-12-01',
        //to: '2017-12-12',
        language: userLanguage,
        sortBy: 'relevancy',
        pageSize: 2
    }).then(response => {
        console.log(response);
    });
});

// Gibt alle Nachrichtendinste z.B. BBC sowie ihre Untergruppen z.B. BBC Sport zurück
router.get('/source', (req, res) => {
    newsapi.v2.sources({
    }).then(response => {
        console.log(response);
    });
});

module.exports = router;