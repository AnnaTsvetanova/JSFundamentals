function rounding(num, precision){
    if(precision>15) {
        precision = 15;
    } console.log(parseFloat(num.toFixed(precision)));

    let i =  Number.MAX_SAFE_INTEGER;
    console.log(i);
}
rounding(10.5,3);