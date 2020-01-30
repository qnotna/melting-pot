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

        // this value indicated the first relevant paragraph 
        let indexOfContentBegin = 0

        // if the content preview was specified by the newsAPI 
        // it is possible to specify which paragraph from the list of all page paragraphs
        // is THE FIRST ONE containing the actual content
        if(contentPreview){
            indexOfContentBegin = getFirstIndexWithContext(contentPreview, pArray)
            // some contents specified by the newsAPI begin with the description
            // paragraph will be skipped if it contains the description 
            // to detect this we would check if our new parahraph (indexOfContentBegin)
            // returns a match with the decription
            const isDescriptionTheFirstParagraph = getFirstIndexWithContext(description, [pArray[indexOfContentBegin]]) !== -1
            if (isDescriptionTheFirstParagraph) {
                // increasing this value will result in deleting one more paragraph (with the description)
                indexOfContentBegin++
            }

            // remove all paragraphs before content begin
            pArray.splice(0, indexOfContentBegin)
        }

        // find the index of the parahraph after a specific amount of chars
        // const indexOfContentEnd = getIndexAfterCharAmount(pArray)

        // let contentLength = 0
        // for (const elem of pArray) {
        //     contentLength += strip(elem.innerHTML).length
        // }
        // console.log(contentLength)
        // console.log(contentPreview)

        // console.log("content begins from index: ", indexOfContentBegin)
        // // console.log(pArray)
        // for (const iterator of pArray) {
        //     console.log(getParahraphWords(iterator))
        // }
        // console.log(contentPreview)

        


        // create an array with the innerHtml of each parahraph
        let articleParagraphs = []
        for(let p of pArray){
            articleParagraphs.push(p.innerHTML)
        }
        callback(articleParagraphs)
           
    }, url)

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