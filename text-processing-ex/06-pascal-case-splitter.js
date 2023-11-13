function pascalCaseSplitter (str) {

        let result = [];
        let currentWord = '';
      
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
      
          
          if (char == char.toUpperCase() && i > 0) {
            
            result.push(currentWord);
            
            currentWord = char;
          } else {
            
            currentWord += char;
          }
        }
      
        
        result.push(currentWord);
      
        
        console.log(result.join(', '));
      }
      


pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCaseSplitter('ThisIsSoAnnoyingToDo');
// pascalCaseSplitter('HoldTheDoor');