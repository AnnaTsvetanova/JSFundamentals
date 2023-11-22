function validEmails (input) {


    let pattern = / (?<user>\b[a-z0-9]+[.,\-_]*[a-z0-9]*)@(?<host>[a-z]+[\.|\-]+[a-z]+(\.*[a-z]*){2}\b)/g;
    
    let match = input.match(pattern);
    
    if (match){
    
    console.log(`${match.join('\n')}`);
    
    }
    }
    //validEmails('Please contact us at: support@github.com.');
    //validEmails ('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
    validEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.'); 