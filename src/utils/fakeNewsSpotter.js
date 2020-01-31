import lda from 'lda'

export default function (article, callback) {
    console.log(article)
    // check the author
    const authorOk = Boolean(article.author)
    const author = {
        ok: authorOk,
        category: 'Author',
        msg: authorOk ? article.author : 'This article hasn\'t specified an author. Be careful'
    }

    // compare title, description and content topics
    // const topicsOk = checkArticleTopics(article.title, article.description, article.paragraphs)


    callback([
        author
    ])
}

// function checkArticleTopics(title, description, paragraphs) {
//     const title = removeSpecialCharacters(a.title)
//     const description = removeSpecialCharacters(a.description) || title
//     const articleTags = lda([title, title, description], 1, 5, ['de', 'en'])

//     for (const p of paragraphs) {
        
//     }

// }

function removeSpecialCharacters(str){
    return str ? str.replace(/[^a-zA-ZäöüÄÖÜß ]/g, " ") : undefined
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
