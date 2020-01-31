import lda from 'lda'

export function getSectionTags(section, amount, callback){
    // console.log(section)
    let tags = []

    for (const a of section.articles) {
        const title = removeSpecialCharacters(a.title)
        const description = removeSpecialCharacters(a.description) || title
        const content = removeSpecialCharacters(a.content) || description || title
        const articleTags = lda([title, title, title, description, content], 1, 3, ['de'])

        // check if tags already added as result previous articles
        for (const tag of articleTags[0]) {
            const indexInsideTags = tags.findIndex(t => t.term === tag.term)
            if(indexInsideTags != -1){
                tags[indexInsideTags].probability += tag.probability
            } else {
                tags.push(tag)
            }
        }
    }
    tags.sort((a, b) => b.probability - a.probability)
    tags = tags.splice(0, amount)
    console.log(tags)


    callback(tags)
}

function removeSpecialCharacters(str){
    return str ? str.replace(/[^a-zA-ZäöüÄÖÜß ]/g, " ") : undefined
}

export function getArticleTags(article, callback){

}