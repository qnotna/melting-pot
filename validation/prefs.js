module.exports = function validateUserPreferences(data) {
    const allowed_preferences = {
        languages: ["de", "pl", "ar", "en", "es", "fr", "he", "it", "nl", "no", "pt", "ru", "zh"],
        countries: ["ae", "ar", "at", "au", "be", "bg", "br", "ca", "ch", "cn", "co", "cu", "cz", "de", "eg", "fr", "gb", "gr", "hk", "hu", "id", "ie", "il", "in", "it", "jp", "kr", "lt", "lv", "ma", "mx", "my", "ng", "nl", "no", "nz", "ph", "pl", "pt", "ro", "rs", "ru", "sa", "se", "sg", "si", "sk", "th", "tr", "tw", "ua", "us", "ve", "za"]
    }
    let errors = {};

    for (const preference in data) {
        let value = ''
        if (!data[preference].every(val => {
            value = val
            return allowed_preferences[preference].includes(val)
        })) {
            errors[preference] = `Unknown preference inside of ${preference}: ${value}`            
        }
    }
    return {
        errors,
        isValid: !Object.keys(errors).length
    }
}
