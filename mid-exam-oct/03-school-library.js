function schoolLibrary (input) {
    let shelf = input.shift().split('&');
    
    let command = input.shift();
    

    while (command != 'Done') {
        let tokens = command.split(' | ');

        let action = tokens.shift();
        
        if (action == 'Add Book') {
            let book = tokens.shift();
            
            if (shelf.includes(book)) {
                command = input.shift();
                continue; 
            } else 
                shelf.unshift(book);

        } else if (action == 'Take Book') {
            let book = tokens.shift();

            if (shelf.includes(book)) {
                let index = shelf.indexOf(book);
                shelf.splice(index, 1);              
            } else 
                command = input.shift();
                continue;
        } else if (action == 'Swap Books') {
            let bookOne = tokens.shift();
            let bookTwo = tokens.shift();

            if (shelf.includes(bookOne) && shelf.includes(bookTwo)) {
                let idxOne = shelf.indexOf(bookOne);
                let idxTwo = shelf.indexOf(bookTwo);
       
                shelf.splice(idxOne, 1, bookTwo);
                shelf.splice(idxTwo, 1, bookOne);
        } else {
            command = input.shift();
            continue;
        }
            
        } else if (action == 'Insert Book') {
            let book = tokens.shift();
            
            if (shelf.includes(book)) {
                command = input.shift();
                continue;
            } else {
                shelf.push(book);
            }

        } else if (action == 'Check Book') {
            let idx = Number(tokens.shift());

            if (idx < 0 || idx >= shelf.length) {
                command = input.shift();
                continue;
            } else {
                let book = shelf[idx];
                console.log(book);
            }
        }

        command = input.shift();
    } console.log(shelf.join(', '));
}

//schoolLibrary((["Don Quixote&The Great Gatsby&Moby Dick", "Add Book | Ulysses", "Take Book | Don Quixote", "Insert Book | Alice's Adventures in Wonderland", "Done"]));
//schoolLibrary((["Anna Karenina&Heart of Darkness&Catch-22&The Stranger", "Add Book | Catch-22", "Swap Books | Anna Karenina | Catch-22", "Take Book | David Copperfield", "Done"]));
schoolLibrary((["War and Peace&Hamlet&Ulysses&Madame Bovary", "Check Book | 2", "Swap Books | Don Quixote | Ulysses","Done"]));