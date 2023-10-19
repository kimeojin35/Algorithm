function solution(myString, pat) {
    return myString.split("").slice(0, myString.lastIndexOf(pat) + pat.length).join("");
}