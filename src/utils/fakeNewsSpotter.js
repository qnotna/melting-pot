import lda from 'lda'

export default function (article, callback) {
    // check the author
    const authorOk = Boolean(article.author)
    const author = {
        ok: authorOk,
        category: 'Author',
        msg: authorOk ? article.author : 'This article hasn\'t specified an author. Be careful'
    }

    // compare title, description and content topics
    let title = article.title
    let description = article.description
    let paragraphs = [...article.paragraphs]
    const topics = checkArticleTopics(title, description, paragraphs)
    let commonTopicsString = ''
    for (const common of topics.commonTopics) {
        commonTopicsString += `\'${common.term}\'(${common.position}) `
    }

    let acticleTopicsString = ''
    for (const articleTopic of topics.articleTopics) {
        acticleTopicsString += `\'${articleTopic.term}\'(${articleTopic.position}) `
    }

    const topicsOk = Boolean(topics.commonTopics.length)
    const topicEquality = {
        ok: topicsOk,
        category: 'Title and Content topics',
        msg: topicsOk ? `Found ${topics.commonTopics.length} common topics. ${commonTopicsString}` : `Article title and content doesn\'t seem to share same topics. This article appears to be about ${acticleTopicsString}`

    }

    callback([
        author,
        topicEquality
    ])
}

function checkArticleTopics(title, description, p) {
    const titleClean = removeSpecialCharacters(title)
    const descriptionClean = removeSpecialCharacters(description) || title
    const articleTags = lda([titleClean, descriptionClean, description], 1, 5, ['de', 'en'])

    p.forEach((e, i) => p[i] = removeExtraWhitespaces(removeSpecialCharacters(e)).trim().toLowerCase() )
    p = p.filter(e => e != ' ')
    p = p.filter(e => e.split(" ").length > 5 )
    p = p.splice(0, 5) || p.splice(0, 4) || p.splice(0, 3) || p.splice(0, 2)

    let contentTags = lda([p[0], p[1], p[2], p[3]], 5, 10, ['de', 'en'])
    contentTags = [...contentTags[0], ...contentTags[1], ...contentTags[2] ]

    let tags = []
    // check if tags already added as result previous articles
    for (const tag of contentTags) {
        const indexInsideTags = tags.findIndex(t => t.term === tag.term)
        if(indexInsideTags != -1){
            tags[indexInsideTags].probability += tag.probability
        } else {
            tags.push(tag)
        }
    }

    articleTags[0].forEach((e, i) => e.position = i)

    let commonTopics = []
    for (const aTag of articleTags[0]) {
        const indexOfArticleTagInContentTags = contentTags.findIndex(e => e.term === aTag.term)
        if(indexOfArticleTagInContentTags != -1) {
            commonTopics.push(aTag)
        }
    }

    return { articleTopics: articleTags[0], commonTopics }
}

function removeSpecialCharacters(str){
    return str ? str.replace(/[^a-zA-ZäöüÄÖÜß ]/g, " ") : undefined
}

function removeExtraWhitespaces(str){
    return str ? str.replace(/ +(?= )/g,'') : ''
}

/**
 * Remove all html tags from a string
 *
 * @param {*} html = html element
 * @returns stripped string
 */
function strip(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}
