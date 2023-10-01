function maxSequence(arr) {
        let currSeq = [arr[0]];
        let longestSeq = [arr[0]]; 

        for (let i = 1; i < arr.length; i++) {
          if (arr[i] === arr[i - 1]) {
            currSeq.push(arr[i]);
          } else {
            
            if (currSeq.length > longestSeq.length) {
              longestSeq = currSeq.slice(); 
            }
            currSeq = [arr[i]]; 
          }
        }
      
        if (currSeq.length > longestSeq.length) {
          longestSeq = currSeq.slice();
        }

        console.log(longestSeq.join(' '));
      }  


//maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
//maxSequence([4, 4, 4, 4]);
maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
// maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
