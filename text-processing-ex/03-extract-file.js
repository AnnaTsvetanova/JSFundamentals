function extractFile (input) {
    let file = input.split('\\').pop();
    
    let extension = file.split('.').pop();
    
    

    let dotIdx = file.lastIndexOf('.')
    let fileName = file.substring(0, dotIdx);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
    


}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
