function solution(letter) {
    let morse = [['.-', 'a'],['-...','b'],['-.-.','c'],['-..','d'],['.','e'],['..-.','f'],
    ['--.','g'],['....','h'],['..','i'],['.---','j'],['-.-','k'],['.-..','l'],
    ['--','m'],['-.','n'],['---','o'],['.--.','p'],['--.-','q'],['.-.','r'],
    ['...','s'],['-','t'],['..-','u'],['...-','v'],['.--','w'],['-..-','x'],
    ['-.--','y'],['--..','z']]
    var answer = '';
    letter = letter.split(" ");
    for (let i = 0; i < letter.length; i++) {
        for (let j = 0; j < morse.length; j++) {
            let [a, b] = morse[j];
            if (a == letter[i]) {
                answer += b;
            }
        }
    }
    return answer;
}