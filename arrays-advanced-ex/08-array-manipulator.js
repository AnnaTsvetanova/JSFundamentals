function arrManipulator (arr, commands) {

    for (elements of commands) {
        
        let tokens = elements.split(' ');
        let action = tokens[0];

        if(action == 'add') {
            let index = Number(tokens[1]);
            let number = Number(tokens[2]);
            arr.splice(index, 0, number);

        } else if (action == 'addMany') {
            let index = Number(tokens[1]);
            let numsToAdd = tokens.slice(2,).map(Number);

            for(let num of numsToAdd) {
                arr.splice(index, 0, num);
                index++;
            }
            
        } else if (action == 'contains') {
            let num = Number(tokens[1]);
            let index = arr.indexOf(num);
            console.log(index);

        } else if (action == 'remove') {
            let index = Number(tokens[1]);
            arr.splice(index, 1);

        } else if (action == 'shift') {
            let rotations = Number(tokens[1]);

            
            for(let rotation = 1; rotation <= rotations; rotation++){
                let firstNum = arr.shift();
                arr.push(firstNum);

            }

        } else if (action == 'sumPairs') {
                let pairedArr = [];

                   for(let i = 0; i < arr.length; i += 2){
                    if (i + 1 < arr.length) {
                    pairedArr.push(arr[i] + arr[i + 1]);
                    } else {
                        pairedArr.push(arr[i]);
                    }
                  } arr = pairedArr;

            } else if (action == 'print') {
                console.log(`[ ${arr.join(', ')} ]`);
                break;
            }
        }
    }

//arrManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
arrManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
