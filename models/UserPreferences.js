const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserPreferencesSchema = new Schema ({
    _id: String,
    countries: {
        type: [String],
        default: []
    },
    languages: {
        type: [String],
        default: []
    },
    categories: {
        type: [String],
        default: []
    },
    sources: {
        type: [String],
        default: []
    },
    domains: {
        type: [String],
        default: []
    },
    ignored_domains: {
        type: [String],
        default: []
    },
    keywords: {
        type: [String],
        default: []
    },
    

})

// create model for UserPreferences
const UserPreferences = mongoose.model("userPreferences", UserPreferencesSchema);
module.exports = UserPreferences;