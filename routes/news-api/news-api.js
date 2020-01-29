const router = require ('express').Router();
const NewsAPI  = require('newsapi');
// const newsapi = new NewsAPI('1a1523a02e3d4a65a047b106d46acaaa');
// const newsapi = new NewsAPI('04cc2e205e294f27b2072a47d8ce57bd');
const newsapi = new NewsAPI('e0da45e697234dbf8e89825c62e5dfbb');

const HttpError = require('../../middleware/httpError');


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
router.get('/top-headlines', (req, res, next) => {
    // console.log(req.query)
    newsapi.v2.topHeadlines({
        ...req.query
    })
    .then(
        response => res.json(response)
    )
    .catch(
        err => next(err)
    );
});


// https://newsapi.org/docs/endpoints/everything

// Gebe die ersten beiden Ergebnisse des gesuchten Keywords zurück
router.get('/everything', (req, res, next) => {
    let query = checkInput(req.query, next);
    newsapi.v2.everything({
        ...query
    })
    .then(response => {
        res.json(response)
    }
    )
    .catch(err => {
        next(err)
    }
    );
});

// Gibt alle Nachrichtendinste z.B. BBC sowie ihre Untergruppen z.B. BBC Sport zurück
router.get('/source', (req, res) => {
    newsapi.v2.sources({
    }).then(response => {
        console.log(response);
    });
});

function checkInput(query, next){
    let queryParams = query;
    for(let prop of Object.getOwnPropertyNames(queryParams)){
        let value = queryParams[prop];
        if(prop === 'q' && value === ""){
            next(new HttpError("Search term required", 400));
        }
        if(prop === 'sources' && value) {
            value = value.split(",");
        }
        queryParams[prop] = value;
    }
    return queryParams;
}

module.exports = router;