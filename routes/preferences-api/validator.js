const router = require ('express').Router();

const allowed_preferences = {
    countries: ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]

}

router.post("/:id", (req, res, next) => {
    console.log("START VALIDATION")
    for (const preference in req.body) {
        if(!req.body[preference].every(val => allowed_preferences[preference].includes(val))){
            res.status(400).json({
                error: `Unknown preference inside of ${preference}`
            })
        }
    }
    next()
})

module.exports = router