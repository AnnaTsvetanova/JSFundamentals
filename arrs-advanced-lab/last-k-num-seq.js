// You are given two integers n and k. Write a function that generates and prints the following sequence:

function lastKNumSeq (n, k){
    
    let sequence = [1];
    
    for (let i = 1; i < n; i++) {
        let nextElement = 0;
        let startIndex = Math.max(0, i - k);
        for (let j = startIndex; j < i; j++) {
            nextElement += sequence[j];
        }
        sequence.push(nextElement);
    }
    
    console.log(sequence.join(' '));
    
}
lastKNumSeq(8, 2);
//lastKNumSeq(6, 3);