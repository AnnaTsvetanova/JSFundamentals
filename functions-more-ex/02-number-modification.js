function numModif (num){
    
    let newNum = Number(calcAndModify(num));
    console.log(newNum);


    function calcAndModify(num) {
        
        let asStr = String(num);
        let asArr = asStr.split('');
        let sum = 0;
        let digitsCount = 0;

        
        for(let digit of asArr){
            let curNum = Number(digit);
            sum += curNum;
            digitsCount++;
        }
            
        while (sum / digitsCount <= 5) {
            asArr.push('9');
            sum += 9;
            digitsCount++;

        } let newArrStr = asArr.join('');
        return newArrStr;
        
    }
}
numModif(101);
//numModif(5835);
