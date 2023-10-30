function solution(array) {
    const frequency = {};

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (frequency[element] === undefined) {
            frequency[element] = 1;
        } else {
            frequency[element]++;
        }
    }

    let maxFrequency = 0;
    for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
            maxFrequency = frequency[key];
        }
    }

    const mode = [];
    for (const key in frequency) {
        if (frequency[key] === maxFrequency) {
            mode.push(Number(key));
        }
    }

    if (mode.length > 1) {
        return -1;
    } else {
        return mode[0];
    }
}