function loadingBar (num){

    if (num < 100) {
    let loading = loadingProgress(num);
    console.log(`${num}% [${loading}]`);
    let isLoaded = checkIfLoaded(num);
    } else {
    let isLoaded = checkIfLoaded(num);
    let loading = loadingProgress(num);
    console.log(`[${loading}]`);
    }


    function loadingProgress(num){
        let loaded = '';
        let remaining = '';
        let result = '';

        let progress = num / 10;

        let progSym = '%'.repeat(progress);
        loaded += progSym;
        

        let remainingProgress = 10 - progress;
        let remainingProg = '.'.repeat(remainingProgress);
        remaining += remainingProg;
        

        result = loaded + remaining;
        return result;
    }

    function checkIfLoaded(num){

        if (num < 100) {
            console.log('Still loading...');
            return false;
        } else {
            console.log('100% Complete!');
            return true;
        }
    }

}
// loadingBar(30);
// loadingBar(50);
loadingBar(100);