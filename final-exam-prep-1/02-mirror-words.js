function mirrorWords (input) {
    let pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let mirrorW = [];

    let match = pattern.exec(input);
    let count = 0;

    while(match) {
        count++;    
        let firstWord = match[2];
        let secondWord = match[3];

      
                    
        if(firstWord == secondWord.split('').reverse().join('')) {
            
            mirrorW.push(`${firstWord} <=> ${secondWord}`)
        } 

            match = pattern.exec(input);

        }   
        if (count == 0) {
            console.log('No word pairs found!');
        } else {
            console.log(`${count} word pairs found!`);
        }
        if (mirrorW.length == 0) {

            console.log('No mirror words!');
        } else {
            console.log('The mirror words are:');
            console.log(mirrorW.join(', '));
        }
    
}
mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r']);
// mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
// mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#']);