function passwordGenerator (input){
    let [firstStr, secondStr, word] = input;

    let combined = firstStr + secondStr;
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let idx = 0;


    for (let char of combined){
        if(vowels.includes(char)){
        combined = combined.replace(char, word[idx].toUpperCase());
        idx++;

        if (idx == word.length) {
            idx = 0;
        }
    }
} 
    let reversed = combined.split('').reverse().join('');
    console.log(`Your generated password is ${reversed}`);

}
passwordGenerator([
    'ilovepizza',    
    'ihatevegetables',    
    'orange'    
    ]);
// passwordGenerator([
//     'easymoneyeazylife',    
//     'atleasttencharacters',    
//     'absolute'    
//     ]);
// passwordGenerator([
//     'areyousureaboutthisone',    
//     'notquitebutitrustyou',    
//     'disturbed'    
//     ]);