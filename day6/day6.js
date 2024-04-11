
const isPalindrome = (str)=>{
    str= str.toLowerCase().replace(/\W/g,"")
    let  r_str = str.split("").reverse().join("")
    console.log(r_str)
    return str === r_str ? true : false;

}

console.log(isPalindrome("Racecar"))
console.log(isPalindrome("Mr. Owl ate my metal worm"))
console.log(isPalindrome("Hello"))
