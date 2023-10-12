function solution(myString) {
    const result = [];
    let currentLength = 0;

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === "x") {
            result.push(currentLength);
            currentLength = 0;
        } else {
            currentLength++;
        }
    }
    result.push(currentLength);
    return result;
}