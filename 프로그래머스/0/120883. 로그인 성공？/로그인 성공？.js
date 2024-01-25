function solution(id_pw, db) {
    var answer = '';
    for (let i = 0; i < db.length; i++) {
        if (db[i][0] == id_pw[0] && db[i][1] == id_pw[1]) return "login";
        if (db[i][0] == id_pw[0] && db[i][1] != id_pw[1]) return "wrong pw"
    }
    return "fail";
}