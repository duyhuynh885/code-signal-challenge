function checkPalindrome(inputString) {
    const strLen = inputString.length
    if(strLen === 1) return true;
    else if (!(strLen%2 === 0)) {
        const str1 = inputString.slice(0, Math.floor(strLen/2));
        const str2 = inputString.slice(Math.floor(strLen/2) + 1,strLen).split("").reverse().join("")
        if (str1 === str2) return true;
    }else if (strLen%2 === 0) {
        console.log(2);
        const str1 = inputString.slice(0, Math.floor(strLen/2));
        const str2 = inputString.slice(Math.floor(strLen/2),strLen).split("").reverse().join("")
        console.log(str1,str2);
        if (str1 === str2) return true;
    }
    return false
}

console.log(checkPalindrome("hlbeeykoqqqqokyeeblh"));