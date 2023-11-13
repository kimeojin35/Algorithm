function solution(survey, choices) {
    let r = '';
    const scores = { "R": 0, "T": 0, "C": 0, "F": 0, "J": 0, "M": 0,"A": 0, "N": 0};
    for (let i = 0; i < survey.length; i++) {
        const [d, a] = survey[i];
        switch (choices[i]) {
            case 1: scores[d] += 3; break;
            case 2: scores[d] += 2; break;
            case 3: scores[d] += 1; break;
            case 5: scores[a] += 1; break;
            case 6: scores[a] += 2; break;
            case 7: scores[a] += 3; break;
        }
    }
  r += scores["R"] >= scores["T"] ? "R" : "T";
  r += scores["C"] >= scores["F"] ? "C" : "F";
  r += scores["J"] >= scores["M"] ? "J" : "M";
  r += scores["A"] >= scores["N"] ? "A" : "N";

  return r;
}
