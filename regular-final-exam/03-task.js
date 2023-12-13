function dictionary(input) {

    let notebookInfo = {};

    let wordDef = input.shift().split(' | ');

    let toBeTested = input.shift().split(' | ');

    let command = input.shift();
    
    for (information of wordDef) {
        let [word, def] = information.split(': ');
        if(!notebookInfo.hasOwnProperty(word)) {

            notebookInfo[word] = [def];
            }else {
            notebookInfo[word].push(def);
        }    
        
    }
    
    if (command == 'Hand Over') {

    let terms = Object.keys(notebookInfo);
    console.log(terms.join(' '));
    } if(command == 'Test') {

        for (test of toBeTested){

            if (test in notebookInfo) { 

                let testedDefs = notebookInfo[test];
                
                let term = test;
                console.log(`${term}:`);

                for (tested of testedDefs) {
                    console.log(` -${tested}`);
                } 
            }
        }


}

}
// dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
// "fish | domino", "Hand Over"]);
// dictionary((["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin", "care | kitchen | flower",
// "Test"]));
dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance", "bit | code | tackle",
"Test"]);