function echoTypes (param) {
    let type = typeof param;
    console.log(type);
    
    if (type == 'string' || type == 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}
// echoTypes('Hello, JavaScript!');
// echoTypes(18);
echoTypes(null);