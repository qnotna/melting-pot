import contentAPI from './contentAPI';

export default function(url, contentPreview, callback){
    contentAPI.getPageHtml((htmlString) => {
        let html = document.createElement('html');
        html.innerHTML = htmlString.trim();
        

        let pCollection = html.getElementsByTagName('p');

        let articleParagraphs = []

        // console.log(contentPreview)

        // for(let p of pCollection){
        //     console.log(p)
        // }

        for(let p of pCollection){
            articleParagraphs.push(p.innerHTML)
        }
        
        callback(articleParagraphs)
        
        
    }, url)

}