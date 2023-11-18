function race (arr){
    let racers = arr.shift().split(', ');
    let racersInfo = {};

    racers.forEach(racer => racersInfo[racer] = 0);

    
    let lettersPattern = /[a-z]/gi;
    let numbersPattern = /\d/g;

    let command = arr.shift();

    while (command != 'end of race') {

        let nameMatch = command.match(lettersPattern);
        let racerName = nameMatch.join('');

        let distanceMatch = command.match(numbersPattern);
        let racerDistance = distanceMatch.map(Number).reduce((acc, value) => acc + value); 

        if (racerName in racersInfo) {
            racersInfo[racerName] += racerDistance;
        }
    

       command = arr.shift();
       
    } let sorted = Object.entries(racersInfo).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sorted[0][0]}`);    
    console.log(`2nd place: ${sorted[1][0]}`);    
    console.log(`3rd place: ${sorted[2][0]}`);    
   
    
}
// race(['George, Peter, Bill, Tom',
// 'G4e@55or%6g6!68e!!@ ',
// 'R1@!3a$y4456@',
// 'B5@i@#123ll',
// 'G@e54o$r6ge#',
// '7P%et^#e5346r',
// 'T$o553m&6',
// 'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne', 'Mi*&^%$ch123o!#$%#nne787) ', '%$$B(*&&)i89ll)*&) ', 'R**(on%^&ald992) ', 'T(*^^%immy77) ', 'Ma10**$#g0g0g0i0e', 'end of race']);
