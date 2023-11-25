function adAstra (input) {

    let pattern = /(?<characters>\||#)(?<name>[A-Za-z\s]+)\1(?<expiration>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;

    let totalCalories = 0;
    let availableFoods = [];

    let match = pattern.exec(input);
    
    while (match) {
        let {name, expiration, calories} = match.groups;
        availableFoods.push(`Item: ${name}, Best before: ${expiration}, Nutrition: ${calories}`);
        totalCalories += Number(calories);
        match = pattern.exec(input);
    }
    let daysToLast = Math.trunc(totalCalories / 2000);
    console.log(`You have food to last you for: ${daysToLast} days!`);


    for(food of availableFoods){
        console.log(food);
    }
    
}
//adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
//adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);