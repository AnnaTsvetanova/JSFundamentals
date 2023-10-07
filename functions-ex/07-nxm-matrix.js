function nxmMatrix (num){

    for (let rowNum = 1; rowNum <= num; rowNum++){
        let curRow = `${num} `.repeat(num);
        console.log(curRow);
    }
}


nxmMatrix(3);
nxmMatrix(7);
nxmMatrix(2);