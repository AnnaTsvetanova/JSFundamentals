function towns (input) {

    for (let element of input) {
        let tokens = element.split(' | ');
        let town = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);

        let townObj = {town: town, latitude: latitude, longitude:longitude};
        console.log(townObj);
        
    }

}
towns([
    'Sofia | 42.696552 | 23.32601', 
    'Beijing | 39.913818 | 116.363625'] );
towns(['Plovdiv | 136.45 | 812.575']);
