// Latent Dirichlet allocation (LDA) topic modeling in javascript for node.js. 
// LDA is a machine learning algorithm that extracts topics and their related keywords from a collection of documents.

// In LDA, a document may contain several different topics, each with their own related terms. 
// The algorithm uses a probabilistic model for detecting the number of topics specified and extracting their related keywords. 
// For example, a document may contain topics that could be classified as beach-related and weather-related. 
// The beach topic may contain related words, such as sand, ocean, and water. Similarly, the weather topic 
// may contain related words, such as sun, temperature, and clouds.

// See http://en.wikipedia.org/wiki/Latent_Dirichlet_allocation

import lda from "lda"

export default function (targetContents, articleParagraphs) {
    let ldaSentences = []
    // console.log(targetContents)

    for (let content of targetContents) {
        // content may contain different sentences that has to be splitted
        // create an array with sentences from content
        let sentences = content.match(/[^\.!\?]+[\.!\?]+/g);
        // if no sentences add whole content string
        if (sentences == null) {
            ldaSentences.push(content)
        } else {
            // append found sentences to main array
            ldaSentences.push(...sentences)
        }
    }

    // for(let paragraph of articleParagraphs){
    //     // remove html tags from paragraph
    //     paragraph = strip(paragraph)
    //     // create an array with sentences from paragraph
    //     let sentences = paragraph.match(/[^\.!\?]+[\.!\?]+/g);
    //     // if no sentences add whole content string
    //     if (sentences == null) {
    //         ldaSentences.push(paragraph)
    //     } else {
    //         // append found sentences to main array
    //         ldaSentences.push(...sentences)
    //     }
    // }

    // console.log(ldaSentences)

    // Run LDA to get terms for 2 topics (5 terms each).
    var result = lda(ldaSentences, 1, 10, ['en', 'de']);

    return result
}

function strip(html) {
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}