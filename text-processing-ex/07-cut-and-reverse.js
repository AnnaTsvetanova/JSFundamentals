function cutAndReverse (str) {
    let middleIdx = str.length / 2;
    let leftHalf = str.slice(0, middleIdx);
    let rightHalf = str.slice(middleIdx);

    let reversedLeft = leftHalf.split('').reverse().join('');
    let reversedRight = rightHalf.split('').reverse().join('');

    console.log(reversedLeft);
    console.log(reversedRight);
}
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');