export default function calcReadingTime(content, type){
    if(content){
        let readingTime = Math.round(content.split(" ").length/200);
        let suffix = "< 1 Min";
        if(type == 'preview') {
            readingTime = readingTime === 0 ? suffix : "" + readingTime + " Min";
        }
        else {
            suffix = "Unter 1 Minute";
            readingTime = readingTime === 0 ? suffix : "" + readingTime + " Min";
        }
        return readingTime;
    }
}