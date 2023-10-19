function solution(myString, pat) {
    let num = myString.lastIndexOf(pat) + pat.length;
    myString = myString.split("").slice(0, num);
    return myString.join("");
}