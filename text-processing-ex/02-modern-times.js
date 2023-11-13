function modernTimes (str) {
    let words = str.split(' ');
    let hashWords = words.filter(word => word.startsWith('#') && word.length > 1);
    
    for (let word of hashWords) {
        word = word.slice(1);
        let isValid = true;

        for(let char of word) {

            if (!(char.charCodeAt() >= 65 && char.charCodeAt() <= 90 
            || char.charCodeAt() >= 97 && char.charCodeAt() <= 122 )){
                isValid = false;
                break;
            } 
            }
            if (isValid) {
                console.log(word);
            }
        }
    }
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign');