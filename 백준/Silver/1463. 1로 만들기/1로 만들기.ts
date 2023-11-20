const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  function minOperationsToOne(N) {
    const dp = new Array(N + 1).fill(0);

    for (let i = 2; i <= N; i++) {
      dp[i] = dp[i - 1] + 1;

      if (i % 2 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 2] + 1);
      }

      if (i % 3 === 0) {
        dp[i] = Math.min(dp[i], dp[i / 3] + 1);
      }
    }

    return dp[N];
  }

  const input = Number(line);
  const result = minOperationsToOne(input);
  console.log(result);

  rl.close();
});

rl.on("close", () => {
  process.exit();
});