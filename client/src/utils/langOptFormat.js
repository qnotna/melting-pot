export default function formatLangOption(language){
    let code;
    switch(language){
        case "Arabian":
            code = "ar";
            break;
        case "Dutch":
            code = "nl";
            break;
        case "English":
            code = "en";
            break;
        case "French":
            code = "fr";
            break;
        case "German":
            code = "de";
            break;
        case "Italian":
            code = "it";
            break;
        case "Norwegian":
            code = "no";
            break;
        case "Portuguese":
            code = "pt";
            break;
        case "Russian":
            code = "ru";
            break;
        case "Spanish":
            code = "es";
            break;
        case "Sweden":
            code = "se";
            break;
        // case "he":
        //     code = "he";
        //     break;
        // case "ud":
        //     code = "ud";
        //     break;
        // case "zh":
        //     code = "zh";
        //     break;
        default:
            code = "en";
    }
    return code;
}