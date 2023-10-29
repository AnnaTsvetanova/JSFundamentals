function convert(jsonStr) {
    let object = JSON.parse(jsonStr);
    console.log(object);
    
    let keys = Object.keys(object);

    for (let key of keys) {
        console.log(`${key}: ${object[key]}`);
    }

}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
//convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');