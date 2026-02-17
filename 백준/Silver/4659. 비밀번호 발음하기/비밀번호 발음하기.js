const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n");

input.slice(0, -1).forEach((pw) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let hasVowel = false;
  let vowelCount = 0;
  let consonantCount = 0;
  let acceptable = true;

  for (let i = 0; i < pw.length; i++) {
    const char = pw[i];
    if (vowels.has(char)) {
      hasVowel = true;
      vowelCount++;
      consonantCount = 0;
    } else {
      consonantCount++;
      vowelCount = 0;
    }
    if (vowelCount === 3 || consonantCount === 3) {
      acceptable = false;
      break;
    }
    if (i > 0 && char === pw[i - 1]) {
      if (char !== "e" && char !== "o") {
        acceptable = false;
        break;
      }
    }
  }
  if (!hasVowel) acceptable = false;
  console.log(`<${pw}> is${acceptable ? "" : " not"} acceptable.`);
});