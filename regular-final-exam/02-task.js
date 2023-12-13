function easterEggs([input]) {
    
    let pattern = /(?<symbols1>(#{1,}|@{1,})+)(?<colors>[a-z]{2,})(?<symbols2>(#{1,}|@{1,})+)(?<chars>\W*)(?<bckSlash>\/+)(?<number>[0-9]+)(?<bckSlashEnd>\/+)/g;

    let validEggs = pattern.exec(input);

    while(validEggs) {
        

        let {symbols1, colors, symbols2, chars, bckSlash, number, bckSlashEnd} = validEggs.groups;
        
        
        console.log(`You found ${number} ${colors} eggs!`);
        
        validEggs = pattern.exec(input);
    }
    
    

}
//easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);
