import contentAPI from './contentAPI';

export default function(url, contentPreview, description, callback){
    contentAPI.getPageHtml((htmlString) => {
        // create empty html DOM element
        let html = document.createElement('html');
        // fill the html element with the html-string returned by the API
        html.innerHTML = htmlString.trim();
        // create a collection of all p elements from the html page
        // we assume all the relevat article parahraps to be inside of p-Tags
        const pCollection = html.getElementsByTagName('p');
        // map the htmlCollection object to a JavaScript Array
        let pArray = Array.prototype.slice.call( pCollection )

        // this values indicate the first and last relevant paragraph index inside of pArray
        let indexOfContentBegin = -1
        let indexOfContentEnd = pArray.length

        // this will be true if the content parser managed to find content preview inside of the pArray
        let contentBeginFound = false
        // this will be true if the first parahraph of the content preview contains the description
        let descriptionFound = false   
        
        // DETECT FIRST CONTENT PARAGRAPH
        //
        // if the content preview was specified by the newsAPI 
        // it is possible to specify which paragraph from the list of all page paragraphs
        // is THE FIRST ONE containing the actual content
        if(contentPreview){
            // try to find with different accuracy starting from 5
            // accuracy means the algorithm will search for a match within the number of words
            // e.g. accuracy = 5 means it will search for a parahraph containing all five words of the content preview
            // if no paragraph with accuracy 3 found stop search
            for (let accuracy = 5; accuracy != 2 && indexOfContentBegin == -1; accuracy--) { 
                // console.log("try to find content")               
                indexOfContentBegin = getFirstIndexWithContext(contentPreview, pArray, accuracy)
            }
            contentBeginFound = indexOfContentBegin == -1 ? false : true
        }

        // CHECK IF FIRST PARAGRAPH CONTAINS THE DESCRIPTION
        //
        // some contents specified by the newsAPI begin with the description
        // paragraph will be skipped if it contains the description 
        // to detect this we would check if our new parahraph (indexOfContentBegin)
        // returns a match with the decription
        if(contentBeginFound && description){ // only if a artcile begin found and description specified
            const isDescriptionTheFirstParagraph = getFirstIndexWithContext(description, [pArray[indexOfContentBegin]]) !== -1
            if (isDescriptionTheFirstParagraph) {
                // increasing this value will result in deleting one more paragraph (with the description)
                indexOfContentBegin++
                // set the flag
                descriptionFound = true
            }
        }

        // REMOVE ALL PARAGRAPHS BEFORE CONTENT BEGIN (only possible if content begin found)
        //
        if(contentBeginFound){ // only if a artcile begin found
            pArray.splice(0, indexOfContentBegin)
        }

        // THIS COULD ONLY WORK IF THE NEWS API WOULD SEND REAL ARTICLE SIZE!!!!!!!!
        // if(contentPreview){
        //     let articleLength = extractArticleLength(contentPreview, descriptionFound)
        //     // find the index of the parahraph after a specific amount of chars
        //     indexOfContentEnd = getIndexAfterCharAmount(pArray, articleLength)
        //     pArray.splice(-1, indexOfContentEnd)
        // }

        // create an array with the innerHtml of each parahraph
        let paragraphs = []
        for(let p of pArray){
            paragraphs.push(strip(p.innerHTML))
        }

        // create an array with all html page paragraphs
        let rawParagraphsCollection = Array.prototype.slice.call( pCollection )  
        let rawParagraphs = []
        for(let p of rawParagraphsCollection){
            rawParagraphs.push(p.innerHTML)
        }
        
        const parsedContent = {
            paragraphs,
            rawParagraphs,
            contentBeginFound,
            descriptionFound
        }
        callback(parsedContent)
           
    }, url)

}

function getIndexAfterCharAmount(paragraphs, charAmount){
    let currentCharAmount = 0

    for (let i = 0; i < paragraphs.length; i++) {
        const p = paragraphs[i];

        currentCharAmount += strip(p.innerHTML).length
        // console.log(currentCharAmount, charAmount)

        if(currentCharAmount > charAmount) {
            return i - 1
        }
        
    }

}

/**
 * Finds the FIRST occurrence of a specific string (context) inside of an given array of strings
 *
 * @param {string} context - context to be found
 * @param {*} array - list of all strings
 * @param {number} [accuracy=5] - how many first words has to be the same to say that the whole string is the same
 * @returns index of the FIRST occurrence of context inside of array
 */
function getFirstIndexWithContext(context, array, accuracy = 5){
    // create an array containing the first words from context
    const contextWords = context.split(" ").splice(0, accuracy)    
    return array.findIndex(p => {
        // get the first words of the paragraph
        const parahraphWords = getParahraphWords(p, accuracy)
        return areArraysEqual(contextWords, parahraphWords)
    })
}

/**
 * Compares string arrays on equality
 *
 * @param {*} arr1
 * @param {*} arr2
 * @returns 
 */
function areArraysEqual(arr1, arr2){
    return arr1.every((elem, i) => arr2[i] === elem)
}

/**
 * 1. Turn paragraph to string
 * 2. Create an array of words (splitting by whitespaces)
 * 3. Remove all empty strings (these could be created while stripping the html from additional tags)
 * 4. Adjust the array size
 *
 * @param {*} p - html paragraph element (p-Tag)
 * @param {number} amount - how many words should be returned
 * @returns an array with words inside of the paragraph
 */
function getParahraphWords(p, amount = 5) {
    return strip(p.innerHTML).split(" ").filter(elem => elem !== '').splice(0, amount)
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

/**
 * Calculates the article length based on a content string deliverd by the newsAPI
 * This content preview appears in form like = "This is article... [+123 chars]"
 * 
 * 1. extract the number of chars from string (reg. ex. searches for pattern beginning with "[+number")
 * 2. calculate the number of chars taken by the char amount preview ("... [+123 chars]")
 * 3. calculate the actual preview length (without of the amount preview)
 * 4. add the actual preview length and the following character amount 
 * 
 * 4. (if description was found as a content begin)
 *
 * @param {string} content
 * @param {boolean} skipPreview - 
 * @returns if preview should be skipped returns only the extracted following char amount
 *          else also the preview length is added
 */
function extractArticleLength(content, skipPreview = false){
    const followingCharacterAmount = Number(content.match(/\[\+\d+/)[0].substring(2))
    const amountPreviewLength = String(followingCharacterAmount).length + 11
    const previewLength = content.substring(0, content.length - amountPreviewLength).length
    return (skipPreview ? 0 : previewLength) + followingCharacterAmount
}

// Disput über Trump-Buch: Bolton-Anwalt schlägt zurück

// [[getSimpleString(data.title)]]\r\n[[getSimpleString(data.description)]]\r\n[[getSimpleString(data.videoCountText)]]